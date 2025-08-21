import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../Armory/productActions";

const AProduct = () => {
  const dispatch = useDispatch();
  const currentRole = localStorage.getItem("role");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const productsPerPage = 8;
  const { products, form, editingProduct, warning, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(productActions.loadProducts());
    const allCategories = Object.values({
      WOMAN: "WOMAN",
      MAN: "MAN",
      ELECTRONICS: "ELECTRONICS",
      HOME: "HOME",
      MEDICINE: "MEDICINE",
      SPORTS: "SPORTS",
      BABY: "BABY",
      GROCERIES: "GROCERIES",
      HEALTH: "HEALTH",
      CLOTH: "CLOTH",
    });
    setCategories(allCategories);
  }, [dispatch]);

  const change = (e) => {
    dispatch(
      productActions.setFormField({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  const imageC = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const sub = (e) => {
    e.preventDefault();
    dispatch(productActions.saveProduct(editingProduct, images));
    setImages([]);
    setImagePreviews([]);
  };

  const del = (id) => {
    dispatch(productActions.deleteProduct(id));
  };

  const ed = (product) => {
    dispatch(productActions.editProduct(product));
  };

   

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = Array.isArray(products)
     ? products.slice(indexOfFirstProduct, indexOfLastProduct)
     : [];
   const totalPages = Math.ceil(products?.length / productsPerPage) || 1;

  
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      {warning && (
        <div className="text-red-600 mb-4 text-center">{warning}</div>
      )}
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}

      {/* FORM */}
      <form
        onSubmit={sub}
        className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-8 justify-center"
      >
        {[
          { name: "title", placeholder: "Product title", type: "text" },
          { name: "price", placeholder: "Price", type: "number" },
          { name: "description", placeholder: "Description", type: "text" },
          { name: "color", placeholder: "Color", type: "color" },
          { name: "size", placeholder: "Size", type: "text" },
          { name: "quantity", placeholder: "Quantity", type: "number" },
          { name: "discount", placeholder: "Discount", type: "number" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={change}
            required
            className="border-2 outline-none border-gray-300 w-full sm:w-[250px] h-[56px] rounded px-4"
          />
        ))}

        <select
          name="category"
          value={form.category || ""}
          onChange={change}
          required
          className="border-2 outline-none border-gray-300 w-full sm:w-[250px] h-[56px] rounded px-4"
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={imageC}
          className="border-2 outline-none border-gray-300 w-full sm:w-[250px] h-[56px] rounded px-4 py-2"
        />

        {imagePreviews.length > 0 && (
          <div className="flex flex-wrap gap-2 w-full">
            {imagePreviews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`preview-${index}`}
                className="w-[120px] h-auto rounded border"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-red-500 text-white w-full sm:w-[200px] h-[56px] rounded"
        >
          {editingProduct ? "Update Product" : "Create Product"}
        </button>

        {editingProduct && (
          <button
            type="button"
            onClick={() => dispatch(productActions.resetForm())}
            className="bg-gray-500 text-white w-full sm:w-[200px] h-[56px] rounded"
          >
            Cancel
          </button>
        )}
      </form>

      {/* PRODUCT GRID */}
      <h5 className="text-xl font-semibold mb-4">Products</h5>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {Array.isArray(products) &&
    currentProducts.map((product) => (
      <div key={product.id} className="flex justify-center">
        <div className="bg-white w-full max-w-[300px] h-[350px] rounded-lg shadow hover:shadow-2xl transition-all duration-300 flex flex-col">
          {/* Image Container */}
          <div className="w-full h-[200px] bg-slate-100 relative rounded-t-lg overflow-hidden flex justify-center items-center">
            {/* Discount Badge */}
            <div className={`absolute top-3 left-3 text-white text-xs px-2 py-1 rounded ${
              product.discount > 0 
                ? 'bg-red-500' 
                : 'bg-green-500'
            }`}>
              {product.discount > 0 ? `-${product.discount}%` : 'NEW'}
            </div>

            {/* Heart/Eye Icons (optional) */}
           

            {product.images?.length > 0 && (
              <img
                className="w-[172px] h-[152px] object-contain"
                src={`http://localhost:9980/${product.images[0].path}`}
                alt={product.images[0].title || product.title}
              />
            )}
          </div>

          {/* Product Info */}
          <div className="p-4 flex-grow flex flex-col">
            <h5 className="text-sm font-medium text-gray-900 truncate">
              {product.title}
            </h5>
            <div className="flex items-center gap-3 mt-2">
              <p className="text-red-500 font-semibold">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </p>
              {product.discount > 0 && (
                <p className="text-gray-500 line-through text-sm">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Admin Actions */}
          {currentRole === "ROLE_ADMIN" ? (
            <div className="px-4 pb-4 mt-auto">
              <div className="flex gap-2">
                <button
                  onClick={() => ed(product)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex-1 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => del(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex-1 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <button className="mx-4 mb-4 bg-black text-white text-sm font-medium h-[41px] rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    ))}
</div>

      {/* PAGINATION */}
      {products?.length > productsPerPage && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              prev
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;

              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={index}
                    onClick={() => paginate(pageNumber)}
                    className={`px-3 py-1 rounded border ${
                      currentPage === pageNumber
                        ? "bg-red-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                (pageNumber === currentPage - 2 && currentPage > 3) ||
                (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
              ) {
                return (
                  <span key={index} className="px-1">
                    ...
                  </span>
                );
              }
              return null;
            })}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AProduct;
