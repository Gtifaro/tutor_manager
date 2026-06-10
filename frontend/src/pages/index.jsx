import useNumber from '../hooks/useNumber';

export default function MainView() {
  const {number} = useNumber();
  return <div className="mainView">{number}</div>;
}
