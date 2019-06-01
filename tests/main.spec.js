import MainContainer from '../app/src/containers/main/main';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([
    thunk,
])();

describe('<MainContainer />', function () {
    it('Renders without hiccups', function () {
        shallow(<MainContainer store={mockStore}/>);
    });

    it('Contains the H1 header with "Kino.js" as text', function() {
        const wrapper = mount(<MainContainer store={mockStore}/>);
        const h1Header =  <h1>Kino.js</h1>;
        expect(wrapper.contains(h1Header)).toEqual(true);
    });
});