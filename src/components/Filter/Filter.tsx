import Select from "react-select";
import css from "./Filter.module.css";
import makes from "../../resources/makes.json";
import { customStyles } from "./filterSelectorStyle.ts";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks.ts";
import {
  getAdverts,
  getFilteredAdverts,
} from "../../redux/adverts/operations.ts";
import { cleanAdverts } from "../../redux/adverts/actions.ts";

const optionsMake = makes.map((make) => ({
  label: make,
  value: make,
}));

type FormFilter = {
  make: string;
};

type Option = {
  value: string;
  label: string;
};

const Filter = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const dispatch = useAppDispatch();

  let selectRef = null;

  const { handleSubmit, control } = useForm<FormFilter>({
    defaultValues: {
      make: "",
    },
  });

  useEffect(() => {
    if (makes) {
      setOptions(
        makes.map((make) => ({
          value: make,
          label: make,
        }))
      );
    }
  }, []);

  const onSubmit = (data: FormFilter) => {
    dispatch(getFilteredAdverts(data.make));
    setIsFiltered(true);
  };

  const onClearFilter = () => {
    if (!isFiltered) return;
    selectRef.clearValue();
    dispatch(cleanAdverts());
    dispatch(getAdverts(1));
    setIsFiltered(false);
  };

  return (
    <div className="App">
      <form className={css.filterForm} onSubmit={handleSubmit(onSubmit)}>
        {optionsMake.length > 0 && (
          <Controller
            name="make"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder={"Enter the text"}
                styles={customStyles}
                options={optionsMake}
                components={{
                  IndicatorSeparator: () => null,
                }}
                value={
                  field.value
                    ? options.find((option) => option.value === field.value)
                    : null
                }
                onChange={(selectedOption) =>
                  field.onChange(selectedOption?.value)
                }
                ref={(ref) => (selectRef = ref)}
              />
            )}
          />
        )}
        <button className={css.submit} type="submit">
          Search
        </button>
        {isFiltered && (
          <button className={css.clear} type="button" onClick={onClearFilter}>
            Clear Filter
          </button>
        )}
      </form>
    </div>
  );
};

export default Filter;
