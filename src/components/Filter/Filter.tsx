import Select from "react-select";
import css from "./Filter.module.css";
import makes from "../../resources/makes.json";
import { customStyles } from "./filterSelectorStyle.ts";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks.ts";
import { getFilteredAdverts } from "../../redux/adverts/operations.ts";

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
  const dispatch = useAppDispatch();

  const schema = yup
    .object()
    .shape({ make: yup.string().required("Please select the make") });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFilter>({
    resolver: yupResolver(schema),
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
              />
            )}
            rules={{ required: true }}
          />
        )}
        {errors.make && <div>Field is required</div>}
        <button className={css.submit} type="submit">
          Search
        </button>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     <form className={css.filterForm} onSubmit={submitFilter}>
  //       <Select
  // placeholder={"Enter the text"}
  // styles={customStyles}
  // options={optionsMake}
  // components={{
  //   IndicatorSeparator: () => null,
  // }}
  //         // menuIsOpen={true}
  //       ></Select>
  // <button className={css.submit} type="submit">
  //   Search
  // </button>
  //     </form>
  //   </div>
  // );
};

export default Filter;
