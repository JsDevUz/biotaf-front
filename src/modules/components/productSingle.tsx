import { Box, Typography } from "@mui/material";
import thousandDivider from "../../utils/thousandDivider";

function ProductSingle({ item }: any) {
  return (
    <Box
      sx={() => ({
        borderRadius: "20px",
        bgcolor: "#fff",
        padding: "3px",
      })}
    >
      <Box
        sx={() => ({
          "& img": {
            width: "100%",
            borderRadius: "20px",
            objectFit: "contain",
            bgcolor: "#dfdfdf",
            maxHeight: "180px",
          },
        })}
      >
        <img src={item?.img[0]} />
      </Box>
      <Box sx={{ paddingLeft: "8px", paddingY: "10px" }}>
        <Typography sx={{ fontWeight: "600", fontSize: 20 }}>
          {thousandDivider(item?.price, "")} so"m
        </Typography>
        <Typography
          sx={{
            fontWeight: 300,
            mx: "5px",
            display: "-webkit-box",
            overflow: "hidden",
            wordWrap: "break-word",
            textOverflow: "ellipsis",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": "2",
          }}
        >
          {item?.name}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductSingle;
