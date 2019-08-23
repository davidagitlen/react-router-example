import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import Home from './Home';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';

describe('App', () => {
  
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });

  describe('Route', () => {

    it('should route to the homepage by default', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      
      expect(wrapper.find(Home)).toHaveLength(1);
    });

    it('should route to the unicorns page when the unicorns link is clicked', ()=> {
      const wrapper= mount(
        <MemoryRouter initialEntries={['/unicorns']} >
          <App />
        </MemoryRouter>
      );
      const currentCreature = wrapper.find(Creatures);
      
      expect(currentCreature.props().data[0].type).toEqual('unicorns');
      expect(wrapper.find(Creatures)).toHaveLength(1);
    });

    it('should route to the puppies page when the puppies link is clicked', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/puppies']} >
          <App />
        </MemoryRouter>
      );
      const currentCreature = wrapper.find(Creatures);
    
      expect(currentCreature.props().data[0].type).toEqual('puppies');
      expect(wrapper.find(Creatures)).toHaveLength(1);
    });

    it('should route to the sharks page when the sharks link is clicked', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/sharks']} >
          <App />
        </MemoryRouter>
      );
      
      const currentCreature = wrapper.find(Creatures);
     
      expect(currentCreature.props().data[0].type).toEqual('sharks');
      expect(wrapper.find(Creatures)).toHaveLength(1);
      expect(wrapper.find(CreatureDetails)).toHaveLength(0);
    });

    it('should route to a page displaying one specific unicorn when the unicorn image is clicked', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/unicorns/1']} >
          <App />
        </MemoryRouter>
      );
      const currentCreatureDetail = wrapper.find(CreatureDetails);
      
      expect(currentCreatureDetail.props().type).toEqual('unicorns');
      expect(wrapper.find(Creatures)).toHaveLength(0);
      expect(wrapper.find(CreatureDetails)).toHaveLength(1);
    })

  });
  
})