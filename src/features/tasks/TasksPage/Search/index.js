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
