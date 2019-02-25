import { mount, shallowMount } from '@vue/test-utils';
import SearchForm from '@/components/SearchForm';

describe('SearchForm', () => {
  it('should render a snapshot with no data passed in', () => {
    const wrapper = mount(SearchForm);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render a snapshot with correct query data passed in', () => {
    const wrapper = mount(SearchForm);
    wrapper.setData({ query: 'trees' });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render a snapshot with correct error data passed in', () => {
    const wrapper = mount(SearchForm);

    wrapper.setData({
      error: 'Type a query in the search bar to view related images.'
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should call onClick method when button is pressed', () => {
    const wrapper = mount(SearchForm);
    wrapper.vm.onClick = jest.fn();

    wrapper.find('button').trigger('click');
    expect(wrapper.vm.onClick).toHaveBeenCalled();
  });

  it('should set error to a string if no search query is entered', () => {
    const wrapper = mount(SearchForm);

    wrapper.find('button').trigger('click');
    wrapper.vm.onClick();
    expect(wrapper.attributes().error).toEqual();
  });

  it('should set query to a string if entered in a search', () => {
    const wrapper = mount(SearchForm);

    const input = wrapper.find('input');
    input.element.value = 'kittens';
    input.trigger('click');
    expect(wrapper.attributes().query).toEqual();
  });
});
