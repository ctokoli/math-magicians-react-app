import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import HomePage from '../components/Home';
import LayoutPage from '../components/Layout';
import DisplayQuotes from '../components/Quotes';

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

  it('home component should render text ', () => {
    render(<HomePage />);
    const heading = screen.getByText('This is the home page');
    expect(heading).toBeInTheDocument();
  });

  it('Should test for the HomePage component', () => {
    const home = renderer.create(<HomePage />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('Should test for the layout component', () => {
    const layout = renderer.create(
      <MemoryRouter>
        <LayoutPage />
      </MemoryRouter>,
    ).toJSON();
    expect(layout).toMatchSnapshot();
  });

  it('Should test for the Quotes component', () => {
    const home = renderer.create(<DisplayQuotes />).toJSON();
    expect(home).toMatchSnapshot();
  });
});
