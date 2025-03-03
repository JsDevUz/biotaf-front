import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import ProductSingle from "./productSingle";
import { Link } from "react-router-dom";
import productListData from "../../../public/products.json";

function ProductList({ productId }: { productId: number }) {
  return (
    <Box sx={{}}>
      <Masonry
        sx={{
          "& > *:not(:last-child)": {
            marginRight: "12px",
            marginBottom: "12px",
          },
        }}
        columns={2}
      >
        {productListData
          .filter((e) => e?.id != productId)
          .map((item) => (
            <Link to={`/products/${item?.id}`}>
              <ProductSingle item={item} />
            </Link>
          ))}
      </Masonry>
    </Box>
  );
}

export default ProductList;
