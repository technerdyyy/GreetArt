// src/pages/TemplateGallery.jsx
import { useParams, useNavigate } from "react-router-dom";
import { birthdayTemplates } from "../data/birthdayTemplates";
import { anniversaryTemplates } from "../data/anniversaryTemplates";
import { quotesTemplates } from "../data/quotesTemplates";
import { thanksTemplates } from "../data/thanksTemplates";

const allTemplates = {
  birthday: birthdayTemplates,
  anniversary: anniversaryTemplates,
  quotes: quotesTemplates,
  thankyou: thanksTemplates,
};

const TemplateGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const templates = allTemplates[category] || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center capitalize">
        {category} Templates
      </h1>

      {templates.length === 0 ? (
        <p className="text-center text-red-500">
          No templates found for "{category}"
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="border rounded shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => navigate(`/edit/${category}/${template.id}`)}
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{template.title}</h3>
                <p className="text-sm text-gray-600">{template.description}</p>
                <button className="mt-3 px-4 py-1 border rounded hover:bg-gray-100">
                  🎨 Create Card
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;
