import  { useContext } from "react";
import SubCategory from "./UI/SubCategory.jsx";
import ProductPageContext from "../../Context/ProductPageContext";

function SubCategoryContainer() {
  const { subCategoryList } = useContext(ProductPageContext);

  return (
    subCategoryList && (
      <div className="hideScrollbar  sticky h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)]  top-0  bottom-0 left-0 shrink-0 flex-col  w-40 md:w-80   overflow-scroll border bg-gray-200">
        {subCategoryList.map((subCategory) => (
          <SubCategory
            mainCategoryId={subCategory.category}
            key={subCategory.id}
            id={subCategory.id}
            name={subCategory.name}
            image={subCategory.image}
          />
        ))}
      </div>
    )
  );
}

export default SubCategoryContainer;