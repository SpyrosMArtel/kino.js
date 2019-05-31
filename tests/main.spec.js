import MainContainer from '../app/src/containers/main/main';

describe('<MainContainer/>', function () {
    it('Renders without hiccups', function () {
        shallow(<MainContainer/>);
    });

    it('Contains the H1 header with "Kino.js" as text', function() {
        const wrapper = shallow(<MainContainer/>);
        const h1Header =  <h1>Kino.js</h1>;
        expect(wrapper.contains(h1Header)).toEqual(true);
    });
});