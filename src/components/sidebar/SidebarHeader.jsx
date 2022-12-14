import { Avatar, Typography } from "@mui/material";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        src={require("../../assets/avatar.png")}
        variant='circular'
        sx={{
          height: 200,
          width: 200,
          mx: "auto",
          mb: 3,
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        KH
      </Avatar>
      <Typography variant='h6' color='whitesmoke'>
        کمال حیدری
      </Typography>

      <Typography variant='caption' color='whitesmoke'>
        برنامه نویس و توسعه دهنده فرانت اند
      </Typography>
    </>
  );
};

export default SidebarHeader;
