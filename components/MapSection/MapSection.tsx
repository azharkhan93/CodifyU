import { Box } from "../styled";

export const Mapsection = () => {
  return (
    <Box width={"100%"} bg={"secondary"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3666965223806!2d74.81822607525616!3d34.06011297315405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f002be76439%3A0x77097573c3061325!2sRajbagh%20Srinagar!5e0!3m2!1sen!2sin!4v1722770213742!5m2!1sen!2sin"
        width="full"
        height="500"
        loading="lazy"
      ></iframe>
    </Box>
  );
};
