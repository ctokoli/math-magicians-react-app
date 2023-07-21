import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Components Testing', () => {
  it('Should test for the calculator component', () => {
    const calculator = renderer.create(<Calculator />).toJSON();
    expect(calculator).toMatchSnapshot();
  });
  it('calculator component should render all the buttons ', () => {
    render(<Calculator />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(19);
  });
});
