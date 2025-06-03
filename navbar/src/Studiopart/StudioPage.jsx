import React, { useRef, useState, useEffect } from 'react';
import './StudioScreen.css';

const StudioScreen = () => {
  const [images, setImages] = useState([]);
  const [lastImages, setLastImages] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const wrapperRefs = useRef([]);

  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [isCanvasDragging, setIsCanvasDragging] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const url = URL.createObjectURL(file);

    setLastImages([...images]);
    setImages((prev) => [
      ...prev,
      {
        src: url,
        position: { top: 100, left: 100 },
        size: { width: 200, height: 200 },
      },
    ]);
  };

  const handleRemoveImage = (index) => {
    setLastImages([...images]);
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRestoreImage = () => {
    setImages(lastImages);
  };

  const startDrag = (e, index) => {
    setDraggingIndex(index);
    const image = images[index];
    const dragStart = {
      x: e.clientX - image.position.left,
      y: e.clientY - image.position.top,
    };
    wrapperRefs.current[index].dragStart = dragStart;
  };

  const onDrag = (e) => {
    if (draggingIndex === null) return;

    setImages((prevImages) => {
      const newImages = [...prevImages];
      const dragStart = wrapperRefs.current[draggingIndex].dragStart;
      newImages[draggingIndex].position = {
        left: e.clientX - dragStart.x,
        top: e.clientY - dragStart.y,
      };
      return newImages;
    });
  };

  const stopDrag = () => setDraggingIndex(null);

  useEffect(() => {
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
    return () => {
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', stopDrag);
    };
  });

  const startResize = (e, index, direction) => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = images[index].size.width;
    const startHeight = images[index].size.height;
    const startLeft = images[index].position.left;
    const startTop = images[index].position.top;

    const doResize = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      let newWidth = startWidth;
      let newHeight = startHeight;
      let newLeft = startLeft;
      let newTop = startTop;

      if (direction.includes('right')) newWidth += deltaX;
      if (direction.includes('left')) {
        newWidth -= deltaX;
        newLeft += deltaX;
      }
      if (direction.includes('bottom')) newHeight += deltaY;
      if (direction.includes('top')) {
        newHeight -= deltaY;
        newTop += deltaY;
      }

      setImages((prev) => {
        const newImages = [...prev];
        newImages[index] = {
          ...newImages[index],
          size: { width: newWidth, height: newHeight },
          position: { left: newLeft, top: newTop },
        };
        return newImages;
      });
    };

    const stopResize = () => {
      document.removeEventListener('mousemove', doResize);
      document.removeEventListener('mouseup', stopResize);
    };

    document.addEventListener('mousemove', doResize);
    document.addEventListener('mouseup', stopResize);
  };

  const handleCanvasMouseDown = (e) => {
    if (e.target.className.includes('resizable-draggable-wrapper')) return;
    setIsCanvasDragging(true);
    setDragStartPos({
      x: e.clientX - canvasPosition.x,
      y: e.clientY - canvasPosition.y,
    });
  };

  const handleCanvasMouseMove = (e) => {
    if (!isCanvasDragging) return;
    setCanvasPosition({
      x: e.clientX - dragStartPos.x,
      y: e.clientY - dragStartPos.y,
    });
  };

  const handleCanvasMouseUp = () => {
    setIsCanvasDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleCanvasMouseMove);
    document.addEventListener('mouseup', handleCanvasMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleCanvasMouseMove);
      document.removeEventListener('mouseup', handleCanvasMouseUp);
    };
  }, [isCanvasDragging]);

  return (
    <div
      className="app-layout"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        className="main-canvas"
        onMouseDown={handleCanvasMouseDown}
        style={{
          transform: `translate(${canvasPosition.x}px, ${canvasPosition.y}px)`,
          cursor: isCanvasDragging ? 'grabbing' : 'grab',
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (wrapperRefs.current[index] = el)}
            className="resizable-draggable-wrapper"
            onMouseDown={(e) => startDrag(e, index)}
            style={{
              top: img.position.top,
              left: img.position.left,
              width: img.size.width,
              height: img.size.height,
            }}
          >
            <img src={img.src} alt={`Dropped ${index}`} className="resizable-image" />

            {/* Resize handles */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top', 'right', 'bottom', 'left'].map((dir) => (
              <div
                key={dir}
                className={`resize-handle ${dir}`}
                onMouseDown={(e) => startResize(e, index, dir)}
              />
            ))}

            {/* Remove button */}
            <button
              style={{
                position: 'absolute',
                top: -10,
                right: -10,
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveImage(index);
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Restore Button */}
      <button
        onClick={handleRestoreImage}
        style={{ position: 'fixed', bottom: "90%", left: "78%",top:"6.2%", zIndex: 1000,backgroundColor:"transparent",border:"none",fontSize:"20px" }}
      >
        ⟲
      </button>
    </div>
  );
};

export default StudioScreen;
