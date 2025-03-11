import { Box, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaLocationDot } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import ProductList from "./components/productList";
function MainPage() {
  const [openLoc, setOpenLoc] = useState(false);
  const [loc, setLoc] = useState(localStorage.getItem("loc") || "Toshkent");
  const selectLoc = (e) => {
    setLoc(e);
    localStorage.setItem("loc", e);
    setOpenLoc(false);
  };
  return (
    <Box sx={() => ({})}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          width: "100%",
          color: "#000",
          display: "flex",
          alignItems: "center",
          height: "50px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        })}
        onClick={() => setOpenLoc(true)}
      >
        <Box ml={"15px"}>
          <FaLocationDot />
        </Box>
        <Typography mt="3px" fontWeight={"600"} ml={"10px"}>
          {loc}
        </Typography>
        <Box
          sx={{
            ml: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {openLoc ? (
            <FaChevronUp color="gray" />
          ) : (
            <FaChevronDown color="gray" />
          )}
        </Box>
      </Box>
      <Box height={20} />
      <Carousel
        dynamicHeight={false}
        swipeScrollTolerance={50}
        preventMovementUntilSwipeScrollTolerance={true}
        emulateTouch={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img
            className="rounded-[10px] slider-img phone:h-[200px] phone:object-cover tablet:h-[500px]"
            src="/banner.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            className="rounded-[10px] slider-img phone:h-[200px] phone:object-cover tablet:h-[500px]"
            src="/banner.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            className="rounded-[10px] slider-img phone:h-[200px] phone:object-cover tablet:h-[500px]"
            src="/banner.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
      <Box height={20} />
      <ProductList productId={NaN} />
      <Drawer
        sx={{
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          overflow: "hidden",
        }}
        anchor="bottom"
        onClose={() => setOpenLoc(false)}
        open={openLoc}
      >
        <Box
          sx={{
            height: "5px",
            bgcolor: "#000",
            width: "200px",
            margin: "auto",
            mt: "10px",
            borderRadius: "5px",
          }}
        />
        <Box padding={"15px"}>
          {["Toshkent", "Andijon", "Jizzah"].map((e) => (
            <Typography
              onClick={() => selectLoc(e)}
              sx={{
                backgroundColor: "#2563eb",
                fontWeight: "600",
                m: "5px 0",
                borderRadius: "20px",
                p: "10px",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              {e}
            </Typography>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}

export default MainPage;
