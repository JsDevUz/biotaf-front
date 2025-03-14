import { Box, Button, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import ProductList from "../components/productList";
import { FaChevronLeft } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productListData from "../../../public/products.json";
import thousandDivider from "../../utils/thousandDivider";
function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(productListData.find((e) => e?.id == Number(id)));
  }, [id]);
  let region;
  if (typeof window !== "undefined") {
    region = localStorage.getItem("loc") || "Toshkent";
  }
  console.log("l");

  const getLink = () => {
    // return region == "Toshkent"
    //   ? "https://telegram.me/Muxtorjon_HR"
    //   : region == "Jizzah"
    //   ? "https://telegram.me/shokh_0810"
    //   : region == "Andijon"
    //   ? "https://telegram.me/BioTaf_and"
    //   : "https://telegram.me/UzbekistanAndAsaka";
    return "https://telegram.me/biotafadmin";
  };
  return (
    <Box>
      <Box
        onClick={() => navigate("/")}
        sx={{
          position: "absolute",
          top: 0,
          zIndex: 9999,
          padding: "8px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          m: "15px 0 0 15px",
        }}
      >
        <FaChevronLeft color="green" size={25} />
      </Box>
      <Box
        sx={() => ({
          "& .slider-wrapper": {
            borderRadius: 0,
            backgroundColor: "#fff",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          },
        })}
      >
        <Carousel showArrows={false} infiniteLoop showThumbs={false}>
          {[1, 2, 3].map((_, i) => (
            <Box
              sx={{
                "& img": {
                  objectFit: "cover",
                  width: "100% !important",
                  height: "60vh !important",
                },
              }}
              key={i}
            >
              <img height="400px" src={product?.img[0]} />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box height={20} />
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          color: "#000",
          padding: "15px",
          borderRadius: "20px",
        })}
      >
        <Typography
          sx={{
            fontWeight: "600",
            mb: "10px",
            fontSize: "17px",
          }}
        >
          {product?.name}
        </Typography>
        <Typography
          sx={{
            mb: "10px",
            fontWeight: "600",
            fontSize: 22,
            color: "green",
          }}
        >
          {thousandDivider(Number(product?.price), "")} so'm
        </Typography>
        <Typography fontSize={"17px"} sx={{}}>
          {product?.about}
        </Typography>
        <Link to={getLink()}>
          <Button
            sx={{
              bgcolor: "green",
              color: "#fff",
              margin: "auto",
              mt: "20px",
              height: "50px",
              width: "100%",
              borderRadius: "20px",
            }}
          >
            Sotib olish
          </Button>
        </Link>
      </Box>
      <Box height="30px" />
      <Typography sx={{ mb: 2, fontSize: "20px", fontWeight: "600" }}>
        Boshqa maxsulotlar
      </Typography>

      <ProductList productId={Number(id || 0)} />
    </Box>
  );
}

export default ProductPage;
