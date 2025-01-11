import useMediaQuery from "./useMediaQuery";

export default function useWMediaQuery() {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLoading = !isDesktop && !isTablet && !isMobile;

  return { isDesktop, isTablet, isMobile, isLoading };
}
