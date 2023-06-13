export default function Input({ inputValue, onClickAdd, handleInputChange }) {
  return (
    <>
      <input type="text" placeholder="할 일을 입력해 주세요" value={inputValue} onChange={handleInputChange} style={{ marginRight: '10px' }} />
      <button type="button" onClick={onClickAdd}>추가</button>
    </>
  );
}
