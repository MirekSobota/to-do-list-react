import { useLocation, useHistory } from "react-router-dom";

import Input from "../../Input";
import { Wrapper } from "./styled";
import { searchQueryParamName } from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  // const history = useHistory();
  // const location = useLocation();
  // const query = new URLSearchParams(location.search).get(searchQueryParamName);

  // const onInputChange = ({ target }) => {
  //   const searchParams = new URLSearchParams(location.search);
  //   if (target.value.trim() === "") {
  //     searchParams.delete(searchQueryParamName);
  //   } else {
  //     searchParams.set(searchQueryParamName, target.value);
  //   }

  //   history.push(`${location.pathname}?${searchParams.toString()}`);
  // };

  return (
    <Wrapper>
      <Input
        placeholder="Filter tasks"
        value={query || ""}
        onChange={onInputChange}
      ></Input>
    </Wrapper>
  );
};

export { Search };
