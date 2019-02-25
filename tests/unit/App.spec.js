import { mount, shallowMount } from '@vue/test-utils';
import { RouterLinkStub } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import App from '@/App.vue';
import axios from 'axios';

let mockPhotos = [
  {
    id: 'VsO7V8F5jKM',
    created_at: '2018-06-23T22:14:53-04:00',
    updated_at: '2018-08-28T21:10:50-04:00',
    width: 4032,
    height: 3024,
    color: '#F2F7F7',
    description: 'roadway surrounded by trees',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1529806414965-afc2044ad821?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU4MDQzfQ',
      full:
        'https://images.unsplash.com/photo-1529806414965-afc2044ad821?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU4MDQzfQ',
      regular:
        'https://images.unsplash.com/photo-1529806414965-afc2044ad821?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU4MDQzfQ',
      small:
        'https://images.unsplash.com/photo-1529806414965-afc2044ad821?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU4MDQzfQ',
      thumb:
        'https://images.unsplash.com/photo-1529806414965-afc2044ad821?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU4MDQzfQ'
    },
    links: {
      self: 'https://api.unsplash.com/photos/VsO7V8F5jKM',
      html: 'https://unsplash.com/photos/VsO7V8F5jKM',
      download: 'https://unsplash.com/photos/VsO7V8F5jKM/download',
      download_location: 'https://api.unsplash.com/photos/VsO7V8F5jKM/download'
    },
    categories: [],
    sponsored: false,
    sponsored_by: null,
    sponsored_impressions_id: null,
    likes: 53,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: 'f7_7Og7t588',
      updated_at: '2019-02-22T22:14:45-05:00',
      username: 'sherlockholmes26',
      name: 'Oriental Orchid',
      first_name: 'Oriental',
      last_name: 'Orchid',
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/sherlockholmes26',
        html: 'https://unsplash.com/@sherlockholmes26',
        photos: 'https://api.unsplash.com/users/sherlockholmes26/photos',
        likes: 'https://api.unsplash.com/users/sherlockholmes26/likes',
        portfolio: 'https://api.unsplash.com/users/sherlockholmes26/portfolio',
        following: 'https://api.unsplash.com/users/sherlockholmes26/following',
        followers: 'https://api.unsplash.com/users/sherlockholmes26/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 7,
      accepted_tos: true
    },
    tags: [
      { title: 'central park' },
      { title: 'new york' },
      { title: 'autumn' },
      { title: 'fall' },
      { title: 'park' },
      { title: 'nature' },
      { title: 'outdoors' },
      { title: 'explore' },
      { title: 'trees' },
      { title: 'tree silhouette' },
      { title: 'aprk road' },
      { title: 'park road' },
      { title: 'park path' },
      { title: 'path' }
    ],
    photo_tags: [
      { title: 'central park' },
      { title: 'new york' },
      { title: 'autumn' },
      { title: 'fall' },
      { title: 'park' }
    ]
  }
];

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { results: mockPhotos } }))
}));

describe('App', () => {
  it('should render a snapshot with no data passed in', () => {
    const wrapper = mount(App, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render a snapshot with data passed in', () => {
    const wrapper = mount(App, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    wrapper.setData({ photos: mockPhotos, query: 'trees' });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('calls axios GET method when fetchPhotos is called', async () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    wrapper.vm.fetchPhotos('kittens');
    expect(axios.get).toBeCalledWith(
      'https://api.unsplash.com/search/photos?page=1&per_page=100&client_id=8e61eaf52742d2c6bb3fd7d371677ce6ad6a0b7516dd68615fa3ac0678676431&query=kittens'
    );
  });

  it('should set data of photos to an array when fetchPhotos is called', async () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    const expected = mockPhotos;

    await wrapper.vm.fetchPhotos('kittens');
    expect(wrapper.vm.photos).toEqual(expected);
  });
});
