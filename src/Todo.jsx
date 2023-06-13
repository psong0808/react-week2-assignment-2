export default function Todo({ index, content, onClick }) {
  return (
    <>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '10px' }}>
          {index + 1}
          .
          {' '}
          {content}
        </p>
        <button type="button" onClick={onClick}>완료</button>
      </span>
    </>
  );
}
