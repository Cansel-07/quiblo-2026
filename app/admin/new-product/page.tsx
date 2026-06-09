"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [formData, setFormData] = useState({ title: "", price: "", description: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setError("");
    setSuccess("");

    if (!formData.title || !formData.price || !formData.description) {
      setError("Please fill in all required fields..");
      return;
    }

    if (isNaN(Number(formData.price))) {
      setError("Please enter a valid number for the price.");
      return;
    }

    setSuccess("Product added successfully! (This is a test, not connected to the database)");
    setFormData({ title: "", price: "", description: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="bg-gray-800 h-24 p-6 text-white flex items-center">
          <h1 className="text-2xl font-bold">Add New Product (Admin)</h1>
        </div>

        <div className="p-8">
          
          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

         
          {success && (
            <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              <span className="block sm:inline">{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="e.g., JavaScript online course"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (EUR) *</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="e.g., 149.99"
              />
            </div>

        
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter detailed information about the product..."
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}