import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { birthdayTemplates } from "../data/birthdayTemplates";
import { anniversaryTemplates } from "../data/anniversaryTemplates";
import { quotesTemplates } from "../data/quotesTemplates";
import { thanksTemplates } from "../data/thanksTemplates";

const EditTemplate = () => {
  const canvasRef = useRef(null);
  const allTemplates = {
    birthday: birthdayTemplates,
    anniversary: anniversaryTemplates,
    quotes: quotesTemplates,
    thankyou: thanksTemplates,
  };

  const { category, templateId } = useParams();
  const templates = allTemplates[category] || [];
  const selectedTemplate = templates.find((tpl) => tpl.id === templateId);

  // Form states (editable by user)
  const [nameInput, setNameInput] = useState("Any Name Here");
  const [colorInput, setColorInput] = useState("#75452E");
  const [fontSizeInput, setFontSizeInput] = useState(40);
  const [fontInput, setFontInput] = useState("Times New Roman");
  const [alignInput, setAlignInput] = useState("right");

  // Rendered states (applied on canvas)
  const [name, setName] = useState(nameInput);
  const [color, setColor] = useState(colorInput);
  const [fontSize, setFontSize] = useState(fontSizeInput);
  const [font, setFont] = useState(fontInput);
  const [align, setAlign] = useState(alignInput);

  const [editMode, setEditMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedTemplate) {
      setError("Template not found or canvas not available.");
      setIsLoading(false);
      return;
    }

    const ctx = canvas.getContext("2d");
    const img = new Image();
    canvas.width = 700;
    canvas.height = 700;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px '${font}'`;
      ctx.fillStyle = color;
      ctx.textAlign = align;
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;

      const lines = name.split("\\n");
      const lineHeight = fontSize * 1.2;
      const startY = 500 - ((lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, index) => {
        const y = startY + index * lineHeight;
        let x = canvas.width / 2;
        if (align === "left") x = 50;
        if (align === "right") x = canvas.width - 50;
        ctx.fillText(line, x, y);
      });

      ctx.shadowColor = "transparent";
      setIsLoading(false);
      setError(null);
    };

    img.onerror = () => {
      setError("Failed to load image");
      setIsLoading(false);
    };

    setIsLoading(true);
    setError(null);
    img.src = selectedTemplate.svgPath;
  };

  // Draw only when render values change
  useEffect(() => {
    drawCanvas();
  }, [name, color, fontSize, font, align, selectedTemplate]);

  const handleMagic = () => {
    // Apply inputs to render states
    setName(nameInput);
    setColor(colorInput);
    setFontSize(fontSizeInput);
    setFont(fontInput);
    setAlign(alignInput);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${templateId}-template.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* Canvas Section */}
      <div className="flex-1 bg-white rounded shadow p-4">
        <h2 className="text-2xl font-bold mb-4 capitalize">
          {category} Editor
        </h2>
        {error && (
          <div className="text-red-600 mb-4 p-3 bg-red-50 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 rounded">
              Loading template...
            </div>
          )}
          <canvas
            ref={canvasRef}
            className="border w-full max-w-full h-auto rounded"
            style={{ backgroundColor: "#f9f9f9" }}
          />
        </div>
      </div>

      {/* Controls Panel */}
      <div className="w-full lg:w-[400px] bg-white rounded shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-red-700">
            Enter Your Details
          </h3>
          <div className="flex items-center gap-2 text-sm">
            Edit Mode
            <button
              onClick={() => setEditMode(!editMode)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                editMode ? "bg-red-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                  editMode ? "translate-x-6" : "translate-x-1"
                }`}
              ></div>
            </button>
          </div>
        </div>

        <input
          type="text"
          value={nameInput}
          onChange={(e) => editMode && setNameInput(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          placeholder="Enter Name Here"
          disabled={!editMode}
        />

        <div className="flex items-center gap-2 mb-4">
          <label className="text-sm">Text Color:</label>
          <input
            type="color"
            value={colorInput}
            onChange={(e) => editMode && setColorInput(e.target.value)}
            className="w-8 h-8 rounded border"
            disabled={!editMode}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            value={fontSizeInput}
            onChange={(e) =>
              editMode && setFontSizeInput(Number(e.target.value))
            }
            className="border p-2 rounded"
            disabled={!editMode}
          >
            {[20, 30, 40, 50, 60].map((s) => (
              <option key={s} value={s}>
                {s}px
              </option>
            ))}
          </select>

          <select
            value={alignInput}
            onChange={(e) => editMode && setAlignInput(e.target.value)}
            className="border p-2 rounded"
            disabled={!editMode}
          >
            {["left", "center", "right"].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <select
          value={fontInput}
          onChange={(e) => editMode && setFontInput(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          disabled={!editMode}
          style={{ fontFamily: fontInput }}
        >
          {[
            "Arial",
            "Times New Roman",
            "Georgia",
            "Comic Sans MS",
            "Verdana",
            "Helvetica",
            "Courier New",
            "AbrilFatface",
            "Baskerville",
            "Dancing Script",
            "Finger Paint",
            "Elsie",
            "Cherry Swash",
            "Brush Script MT",
          ].map((f) => (
            <option key={f} value={f} style={{ fontFamily: f }}>
              {f}
            </option>
          ))}
        </select>

        <div className="flex gap-2 mb-4">
          <button
            onClick={handleDownload}
            disabled={isLoading || error}
            className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-2 rounded transition-colors"
          >
            Download
          </button>
          <button
            onClick={editMode ? handleMagic : null}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded transition-colors"
            disabled={!editMode}
          >
            Magic
          </button>
        </div>

        <p className="text-xs text-purple-600 bg-purple-50 p-2 rounded">
          <strong>Tip:</strong> Add <code>\n</code> for line breaks.
          <br />
          <strong>Example:</strong> <code>Happy\nBirthday</code>
        </p>
      </div>
    </div>
  );
};

export default EditTemplate;
