import getInputList from "../getInputList"
import ModalData from "../ModalData"

const ClickAndInputButton = ({
  endpoint,
  state,
  handleSetState,
  inputName,
  seriesList,
  labelValue,
  charactersList,
  handleSetCharactersList,
}: Readonly<{
  endpoint: string
  state: ModalData
  handleSetState: React.Dispatch<React.SetStateAction<ModalData>>
  inputName: string
  seriesList?: ModalData
  labelValue: string
  charactersList?: ModalData
  handleSetCharactersList?: React.Dispatch<React.SetStateAction<ModalData>>
}>) => {
  const naviChara = state.data[state.choiced]
  return (
    <div>
      <label
        htmlFor={ labelValue }
        className="h-5 mt-1"
      >
        { labelValue }
      </label>
      <button
        className="bg-[#5271ff] w-60 bg-opacity-80 block mx-auto w-60 h-[40px] py-2 rounded-3xl text-center hover:opacity-80"
        onClick={ () => getInputList(endpoint, handleSetState, seriesList, charactersList, handleSetCharactersList) }
        type="button"
      >
        <input
          className="h-[1px] w-[1px] opacity-[0.1]"
          name={ inputName }
          defaultValue={ state.choiced }
          form="item-create"
          required
          id={ labelValue }
        />
        { naviChara }
      </button>
    </div>
  )
}

export default ClickAndInputButton