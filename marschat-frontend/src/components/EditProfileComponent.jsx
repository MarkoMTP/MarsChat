import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfileComponent() {
  const [formData, setFormData] = useState({
    bio: "",
    profilePic: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "profilePic") {
      const file = e.target.files[0];
      setFormData({ ...formData, profilePic: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let uploadedPath = null;

      if (formData.profilePic) {
        const uploadData = new FormData();
        uploadData.append("profilePic", formData.profilePic);
        const uploadRes = await axios.post("/api/upload", uploadData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        uploadedPath = uploadRes.data.filePath;
      }

      await axios.put("/api/users/edit-profile", {
        bio: formData.bio,
        profilePicUrl: uploadedPath,
      });

      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-red-900 via-black to-red-700 text-black px-4 overflow-hidden">
      {/* Animated starfield overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] animate-pulse pointer-events-none"></div>
      <div className="relative w-full max-w-md bg-white text-black p-8 rounded-xl shadow-2xl border border-red-600 z-10">
        <button
          onClick={() => navigate("/home")}
          className="mb-4 py-2 px-4 rounded-md font-bold border-2 border-red-600 bg-white text-black hover:bg-red-600 hover:text-white transition-colors"
        >
          Go Back
        </button>
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="profilePic"
              className="block text-sm font-semibold text-red-600 uppercase mb-2"
            >
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full bg-gray-100 text-black border border-red-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
              rows="4"
              placeholder="Write something about yourself..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-red-600 uppercase mb-2">
              Profile Picture
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
                className="mt-2 w-full text-black bg-gray-100 border border-red-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </label>

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-24 h-24 object-cover rounded-full border-2 border-red-600 mx-auto"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md font-bold transition-colors ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-semibold ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
