import { api } from "..";

export const getSearch = async (name: string) => {
  // 한글이 완성된 상태인지 확인하는 정규식 (조합된 한글이 아닌 경우를 걸러냄)
  const isCompletedHangul = /^[가-힣]+$/;

  if (name !== "" && name.length >= 2 && isCompletedHangul.test(name)) {
    const response = await api.get(`/api/v1/map/search`, {
      params: { name },
    });
    return response.data;
  } else return null;
};
