import ProductForm from "../components/ProductForm";

function Edit() {
  return (
    <div>
      <ProductForm
        onSubmit={function (values: any, actions: any): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default Edit;
