import { useLocation, useHistory } from "react-router-dom";

const useQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
};

const useReplaceQueryParameter = () => {};

export { useQueryParameter, useReplaceQueryParameter };
