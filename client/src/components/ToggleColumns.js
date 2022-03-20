import {useStore} from '../store/store.context';
import {updateVisibleAttributes} from '../store/attributes/attribute.actions';

export const ToggleColumns = () => {

  const {attributeState, attributeDispatcher} = useStore();
  const {attributes} = attributeState;

  const onSelectChange = (e) => {
    const optionsToRemove = Array.from(e.target.options)
      .filter(op => op.selected)
      .map(op => op.value);
    attributeDispatcher(updateVisibleAttributes(optionsToRemove));
  }
  
  return (
    <div className="App-toggle-cols">
      <div><strong>Remove/Add some Columns:</strong></div>
      <div><small>(Note: selected columns will be removed)</small></div>
      <select multiple onChange={onSelectChange}>
        {attributes.map((attr, idx) => (
          <option key={idx} value={attr.key}>{attr.key}</option>
        ))}
      </select>
    </div>
  );
}