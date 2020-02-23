<template>
  <div class="container py-5">
    <!-- UserProfileCard -->

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->

        <!-- UserFollowersCard -->
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->

        <!-- UserFavoritedRestaurantsCard -->
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 2,
    name: 'user1',
    email: 'user1@example.com',
    password: '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
    isAdmin: false,
    image: null,
    createdAt: '2019-11-20T06:25:42.685Z',
    updatedAt: '2019-11-21T09:55:30.970Z',
    Comments: [
      {
        id: 1,
        text: 'Voluptas omnis laudantium et non ut quia unde.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-11-20T06:25:42.942Z',
        updatedAt: '2019-11-20T06:25:42.942Z',
        Restaurant: {
          id: 1,
          name: '123',
          tel: '02-8888-0000',
          address: '01313 ketlch deive',
          opening_hours: '08:00',
          description: 'dsfsafdsadfasasdfasdf',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335',
          viewCounts: 16,
          createdAt: '2019-11-20T06:25:42.921Z',
          updatedAt: '2020-02-23T06:04:48.112Z',
          CategoryId: null
        }
      },
      {
        id: 4,
        text: 'Ea sequi id.',
        UserId: 2,
        RestaurantId: 4,
        createdAt: '2019-11-20T06:25:42.942Z',
        updatedAt: '2019-11-20T06:25:42.942Z',
        Restaurant: {
          id: 4,
          name: 'Icie Bogisich I',
          tel: '018-616-9160',
          address: '89802 Parker Crossing',
          opening_hours: '08:00',
          description: 'Molestiae enim architecto accusantium repellat iste.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=43.567974806132945',
          viewCounts: 36,
          createdAt: '2019-11-20T06:25:42.923Z',
          updatedAt: '2020-01-18T12:08:48.060Z',
          CategoryId: null
        }
      },
      {
        id: 9,
        text: 'Architecto aut a est ut molestias illo harum natus.',
        UserId: 2,
        RestaurantId: 9,
        createdAt: '2019-11-20T06:25:42.942Z',
        updatedAt: '2019-11-20T06:25:42.942Z',
        Restaurant: {
          id: 9,
          name: 'Lambert Weimann',
          tel: '129.140.6063 ',
          address: '520 Jaskolski Streets',
          opening_hours: '08:00',
          description: 'animi',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=6.865111126440082',
          viewCounts: 1,
          createdAt: '2019-11-20T06:25:42.923Z',
          updatedAt: '2019-12-05T08:48:19.484Z',
          CategoryId: null
        }
      },
      {
        id: 31,
        text:
          'Modi officiis recusandae ut harum eligendi iste exercitationem nisi.',
        UserId: 2,
        RestaurantId: 31,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 31,
          name: 'Ofelia Kshlerin II',
          tel: '1-020-848-2670 x403',
          address: '385 Sanford Fords',
          opening_hours: '08:00',
          description: 'excepturi',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=79.35851334047884',
          viewCounts: 1,
          createdAt: '2019-11-20T06:25:42.928Z',
          updatedAt: '2020-02-16T05:41:48.979Z',
          CategoryId: null
        }
      },
      {
        id: 34,
        text: 'Illum eius aut quasi.',
        UserId: 2,
        RestaurantId: 34,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 34,
          name: 'Frida Jones',
          tel: '(605) 542-9140 x08706',
          address: '5248 Dare Forge',
          opening_hours: '08:00',
          description: 'quidem quis quia',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=48.33317711631233',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.929Z',
          updatedAt: '2019-11-20T06:25:42.929Z',
          CategoryId: null
        }
      },
      {
        id: 35,
        text: 'Aliquam vitae odio unde repudiandae ex sit.',
        UserId: 2,
        RestaurantId: 35,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 35,
          name: 'Dr. Tanya Stokes',
          tel: '456-794-6389 x25673',
          address: '719 Baron Rest',
          opening_hours: '08:00',
          description:
            'Veritatis deserunt et harum voluptate minima quis rerum esse. Itaque voluptatem aut voluptas unde aut quas alias. Et laborum doloremque quam veniam.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=39.76113955456408',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.929Z',
          updatedAt: '2019-11-20T06:25:42.929Z',
          CategoryId: null
        }
      },
      {
        id: 36,
        text: 'Necessitatibus non eos aut.',
        UserId: 2,
        RestaurantId: 36,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 36,
          name: 'Kale Nicolas',
          tel: '1-129-966-2808',
          address: '54065 Austin Plains',
          opening_hours: '08:00',
          description:
            'Est et id saepe tenetur et veritatis et. Qui similique illum labore vel impedit. Molestiae alias eligendi. Neque aut natus optio quis sit dolorem reprehenderit et aut. Rerum quis nobis eum quaerat doloribus occaecati. Facilis voluptatem ut ipsam veniam aut.\n \rEt fugit enim qui pariatur fugit non impedit beatae non. Eos atque occaecati distinctio at. Voluptates iste mollitia omnis. Assumenda quia maiores quo minus natus. Quos est non non quidem. Ipsum animi nihil velit ut consequatur nam enim.\n \rConsequatur eligendi alias quis fugit quo dolores numquam dolorem ut. Ex est quasi sint ut. Pariatur quasi suscipit. Asperiores cupiditate animi sed amet eveniet est in voluptas sed. Tenetur id magni ipsum iure minima odit.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=11.056442083543061',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.929Z',
          updatedAt: '2019-11-20T06:25:42.929Z',
          CategoryId: null
        }
      },
      {
        id: 44,
        text: 'Pariatur hic quaerat quas consequatur.',
        UserId: 2,
        RestaurantId: 44,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 44,
          name: 'Citlalli Grady',
          tel: '274-150-1828 x8337',
          address: '054 Ewell Route',
          opening_hours: '08:00',
          description: 'Molestiae cum sit sunt delectus.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=15.185966372644089',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.932Z',
          updatedAt: '2019-11-20T06:25:42.932Z',
          CategoryId: null
        }
      },
      {
        id: 45,
        text: 'Blanditiis ut consequuntur.',
        UserId: 2,
        RestaurantId: 45,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 45,
          name: 'Gay Hintz',
          tel: '(549) 902-6622',
          address: '16657 Lane Rapid',
          opening_hours: '08:00',
          description: 'est',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=53.54156594068704',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.932Z',
          updatedAt: '2019-11-20T06:25:42.932Z',
          CategoryId: null
        }
      },
      {
        id: 46,
        text: 'Dicta eum minima cumque.',
        UserId: 2,
        RestaurantId: 46,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 46,
          name: 'Bernadette Sawayn',
          tel: '1-773-750-7162 x141',
          address: '309 Hackett Valley',
          opening_hours: '08:00',
          description: 'temporibus',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=47.44279873720891',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.932Z',
          updatedAt: '2019-11-20T06:25:42.932Z',
          CategoryId: null
        }
      },
      {
        id: 50,
        text: 'Accusamus sed quo suscipit.',
        UserId: 2,
        RestaurantId: 50,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 50,
          name: 'Jolie Hackett',
          tel: '542.600.9620',
          address: '2439 Tiffany Heights',
          opening_hours: '08:00',
          description: 'magni ut voluptas',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=27.32287991372693',
          viewCounts: 8,
          createdAt: '2019-11-20T06:25:42.934Z',
          updatedAt: '2020-01-21T12:34:18.056Z',
          CategoryId: null
        }
      },
      {
        id: 51,
        text: 'Distinctio laborum explicabo quasi.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 1,
          name: '123',
          tel: '02-8888-0000',
          address: '01313 ketlch deive',
          opening_hours: '08:00',
          description: 'dsfsafdsadfasasdfasdf',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335',
          viewCounts: 16,
          createdAt: '2019-11-20T06:25:42.921Z',
          updatedAt: '2020-02-23T06:04:48.112Z',
          CategoryId: null
        }
      },
      {
        id: 54,
        text: 'Nobis nobis aut quisquam nesciunt repudiandae vel.',
        UserId: 2,
        RestaurantId: 4,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 4,
          name: 'Icie Bogisich I',
          tel: '018-616-9160',
          address: '89802 Parker Crossing',
          opening_hours: '08:00',
          description: 'Molestiae enim architecto accusantium repellat iste.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=43.567974806132945',
          viewCounts: 36,
          createdAt: '2019-11-20T06:25:42.923Z',
          updatedAt: '2020-01-18T12:08:48.060Z',
          CategoryId: null
        }
      },
      {
        id: 56,
        text: 'Eveniet aut recusandae omnis.',
        UserId: 2,
        RestaurantId: 6,
        createdAt: '2019-11-20T06:25:42.944Z',
        updatedAt: '2019-11-20T06:25:42.944Z',
        Restaurant: {
          id: 6,
          name: 'Liliane Dibbert',
          tel: '1-827-478-9971 x690',
          address: '2762 Devon Run',
          opening_hours: '08:00',
          description: 'facilis',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=98.6709769179636',
          viewCounts: 22,
          createdAt: '2019-11-20T06:25:42.923Z',
          updatedAt: '2020-01-08T14:12:46.473Z',
          CategoryId: 7
        }
      },
      {
        id: 74,
        text: 'Rerum sunt animi maxime.',
        UserId: 2,
        RestaurantId: 24,
        createdAt: '2019-11-20T06:25:42.945Z',
        updatedAt: '2019-11-20T06:25:42.945Z',
        Restaurant: {
          id: 24,
          name: 'Tracy Kling',
          tel: '602.671.9831',
          address: '4776 Hazle Freeway',
          opening_hours: '08:00',
          description:
            'Libero fugit omnis inventore quasi maxime magnam autem.\nCupiditate ratione possimus et iure.\nVoluptatem voluptatem sint quasi eos dolores non eum voluptates eveniet.\nDolores accusantium magnam consequatur temporibus molestias.\nSequi corrupti est sed fuga distinctio corporis harum non iure.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=28.34397872340968',
          viewCounts: 6,
          createdAt: '2019-11-20T06:25:42.927Z',
          updatedAt: '2020-02-16T05:34:58.076Z',
          CategoryId: null
        }
      },
      {
        id: 80,
        text: 'Iste veritatis rerum sit repudiandae ex.',
        UserId: 2,
        RestaurantId: 30,
        createdAt: '2019-11-20T06:25:42.945Z',
        updatedAt: '2019-11-20T06:25:42.945Z',
        Restaurant: {
          id: 30,
          name: 'Vince Kassulke',
          tel: '(302) 097-9821 x641',
          address: '82815 Vivianne Inlet',
          opening_hours: '08:00',
          description: 'nihil',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=60.72153192006735',
          viewCounts: 112,
          createdAt: '2019-11-20T06:25:42.928Z',
          updatedAt: '2020-02-16T05:35:03.543Z',
          CategoryId: null
        }
      },
      {
        id: 81,
        text: 'Velit quia maxime ut ex id accusamus est tempora.',
        UserId: 2,
        RestaurantId: 31,
        createdAt: '2019-11-20T06:25:42.945Z',
        updatedAt: '2019-11-20T06:25:42.945Z',
        Restaurant: {
          id: 31,
          name: 'Ofelia Kshlerin II',
          tel: '1-020-848-2670 x403',
          address: '385 Sanford Fords',
          opening_hours: '08:00',
          description: 'excepturi',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=79.35851334047884',
          viewCounts: 1,
          createdAt: '2019-11-20T06:25:42.928Z',
          updatedAt: '2020-02-16T05:41:48.979Z',
          CategoryId: null
        }
      },
      {
        id: 84,
        text: 'Est architecto ab cum delectus voluptatem nihil sed eum sequi.',
        UserId: 2,
        RestaurantId: 34,
        createdAt: '2019-11-20T06:25:42.945Z',
        updatedAt: '2019-11-20T06:25:42.945Z',
        Restaurant: {
          id: 34,
          name: 'Frida Jones',
          tel: '(605) 542-9140 x08706',
          address: '5248 Dare Forge',
          opening_hours: '08:00',
          description: 'quidem quis quia',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=48.33317711631233',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.929Z',
          updatedAt: '2019-11-20T06:25:42.929Z',
          CategoryId: null
        }
      },
      {
        id: 90,
        text: 'Vel fugit repudiandae rem culpa molestias libero.',
        UserId: 2,
        RestaurantId: 40,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 40,
          name: 'Mr. Brennon Jakubowski',
          tel: '1-098-504-4116',
          address: '668 Destin Ferry',
          opening_hours: '08:00',
          description:
            'Dignissimos consectetur itaque eius quasi tempore quibusdam labore et id. Quia odit quis voluptatem nemo quo quisquam eum.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=54.59595296130533',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.931Z',
          updatedAt: '2019-11-20T06:25:42.931Z',
          CategoryId: null
        }
      },
      {
        id: 92,
        text: 'Quas laborum voluptatem et.',
        UserId: 2,
        RestaurantId: 42,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 42,
          name: 'Derek Shields MD',
          tel: '158-995-6038',
          address: '3403 Ortiz Inlet',
          opening_hours: '08:00',
          description:
            'Velit suscipit soluta. Sint deleniti magni quaerat voluptatibus dignissimos hic quia. Pariatur voluptas recusandae impedit voluptatem velit. Deserunt qui odio est vel quisquam et iste quo.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=49.09923471680735',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.931Z',
          updatedAt: '2019-11-20T06:25:42.931Z',
          CategoryId: null
        }
      },
      {
        id: 95,
        text: 'Magni quam consequuntur quibusdam harum officia.',
        UserId: 2,
        RestaurantId: 45,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 45,
          name: 'Gay Hintz',
          tel: '(549) 902-6622',
          address: '16657 Lane Rapid',
          opening_hours: '08:00',
          description: 'est',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=53.54156594068704',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.932Z',
          updatedAt: '2019-11-20T06:25:42.932Z',
          CategoryId: null
        }
      },
      {
        id: 98,
        text: 'Quo voluptatum non mollitia laboriosam enim praesentium ut.',
        UserId: 2,
        RestaurantId: 48,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 48,
          name: 'Rosie Mayer Jr.',
          tel: '1-686-584-6537 x40191',
          address: '46878 Buckridge Passage',
          opening_hours: '08:00',
          description:
            'Ad dignissimos praesentium. Aut vel neque nobis aut. Molestias quasi cumque aut ratione et. Facere voluptatem sapiente. Et praesentium sed ex sunt. Est nihil rem facilis.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=84.39306160663618',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.934Z',
          updatedAt: '2019-11-20T06:25:42.934Z',
          CategoryId: null
        }
      },
      {
        id: 99,
        text: 'Voluptas aut vitae.',
        UserId: 2,
        RestaurantId: 49,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 49,
          name: 'Dejah Kertzmann',
          tel: '(430) 181-8381',
          address: '25596 Haag Creek',
          opening_hours: '08:00',
          description:
            'Quis excepturi similique porro omnis quia sit a quos molestiae. Quia et aut quidem consequatur eum quisquam laboriosam quam. Voluptatibus dolore reprehenderit facere.\n \rMolestiae nam labore similique provident assumenda magni expedita. Quasi assumenda nemo odit unde debitis. Veritatis veritatis alias. Enim libero mollitia voluptatem laudantium explicabo qui.\n \rQuam commodi atque debitis amet voluptas saepe vero maxime et. Est voluptates facilis sit maiores voluptates voluptas. Ut voluptatem in rem eum voluptate culpa.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=86.69959548084738',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.934Z',
          updatedAt: '2019-11-20T06:25:42.934Z',
          CategoryId: null
        }
      },
      {
        id: 101,
        text: 'Nihil iure quas.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 1,
          name: '123',
          tel: '02-8888-0000',
          address: '01313 ketlch deive',
          opening_hours: '08:00',
          description: 'dsfsafdsadfasasdfasdf',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335',
          viewCounts: 16,
          createdAt: '2019-11-20T06:25:42.921Z',
          updatedAt: '2020-02-23T06:04:48.112Z',
          CategoryId: null
        }
      },
      {
        id: 104,
        text: 'Consequatur quisquam accusamus eum ipsum suscipit sed.',
        UserId: 2,
        RestaurantId: 4,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 4,
          name: 'Icie Bogisich I',
          tel: '018-616-9160',
          address: '89802 Parker Crossing',
          opening_hours: '08:00',
          description: 'Molestiae enim architecto accusantium repellat iste.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=43.567974806132945',
          viewCounts: 36,
          createdAt: '2019-11-20T06:25:42.923Z',
          updatedAt: '2020-01-18T12:08:48.060Z',
          CategoryId: null
        }
      },
      {
        id: 106,
        text: 'Asperiores consequatur numquam officia.',
        UserId: 2,
        RestaurantId: 6,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 6,
          name: 'Liliane Dibbert',
          tel: '1-827-478-9971 x690',
          address: '2762 Devon Run',
          opening_hours: '08:00',
          description: 'facilis',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=98.6709769179636',
          viewCounts: 22,
          createdAt: '2019-11-20T06:25:42.923Z',
          updatedAt: '2020-01-08T14:12:46.473Z',
          CategoryId: 7
        }
      },
      {
        id: 109,
        text: 'Omnis quasi iste placeat cupiditate commodi expedita.',
        UserId: 2,
        RestaurantId: 9,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 9,
          name: 'Lambert Weimann',
          tel: '129.140.6063 ',
          address: '520 Jaskolski Streets',
          opening_hours: '08:00',
          description: 'animi',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=6.865111126440082',
          viewCounts: 1,
          createdAt: '2019-11-20T06:25:42.923Z',
          updatedAt: '2019-12-05T08:48:19.484Z',
          CategoryId: null
        }
      },
      {
        id: 114,
        text: 'Sit quia consequuntur dignissimos fugit et labore.',
        UserId: 2,
        RestaurantId: 14,
        createdAt: '2019-11-20T06:25:42.946Z',
        updatedAt: '2019-11-20T06:25:42.946Z',
        Restaurant: {
          id: 14,
          name: 'Rahul Kilback',
          tel: '1-573-027-3190',
          address: '13538 Lula Roads',
          opening_hours: '08:00',
          description:
            'Ut ea repellat cumque illo sint. Possimus a magni iusto molestiae explicabo. Impedit ea magni vel quaerat hic exercitationem nemo alias dolor. Eum rem harum soluta voluptas consequatur.\r\n \r\nSaepe ut deserunt eaque magni nulla omnis aut aut. Vel voluptate enim aut autem incidunt. Sit expedita alias quis pariatur sit. Itaque et dolorem veniam sed reprehenderit aut. Nisi vero exercitationem quibusdam sed vitae iure modi et porro.\r\n \r\nRerum inventore suscipit sequi id optio nemo deserunt tempore. Ab blanditiis libero sed ut eum. Sit doloribus veritatis porro dolor impedit excepturi iste voluptatem. Consequatur iste dolore vero.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=66.19683181847653',
          viewCounts: 77,
          createdAt: '2019-11-20T06:25:42.925Z',
          updatedAt: '2020-02-16T05:36:07.120Z',
          CategoryId: 7
        }
      },
      {
        id: 131,
        text:
          'Id non deleniti impedit est excepturi recusandae distinctio molestiae et.',
        UserId: 2,
        RestaurantId: 31,
        createdAt: '2019-11-20T06:25:42.947Z',
        updatedAt: '2019-11-20T06:25:42.947Z',
        Restaurant: {
          id: 31,
          name: 'Ofelia Kshlerin II',
          tel: '1-020-848-2670 x403',
          address: '385 Sanford Fords',
          opening_hours: '08:00',
          description: 'excepturi',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=79.35851334047884',
          viewCounts: 1,
          createdAt: '2019-11-20T06:25:42.928Z',
          updatedAt: '2020-02-16T05:41:48.979Z',
          CategoryId: null
        }
      },
      {
        id: 137,
        text: 'Nihil ut praesentium est.',
        UserId: 2,
        RestaurantId: 37,
        createdAt: '2019-11-20T06:25:42.947Z',
        updatedAt: '2019-11-20T06:25:42.947Z',
        Restaurant: {
          id: 37,
          name: 'Damaris Johnston',
          tel: '1-576-914-4171 x8326',
          address: '71940 Effertz Throughway',
          opening_hours: '08:00',
          description:
            'Fuga recusandae ut aut dolor sequi reiciendis. Laboriosam est ullam unde omnis laboriosam atque harum. Perferendis nihil magni voluptatem explicabo voluptatem voluptates vel hic incidunt. Eaque doloribus tempore cumque doloribus aperiam. Repellat sint dolorem ut. Ipsum quisquam reprehenderit quod tenetur expedita a aspernatur.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=14.803006892375548',
          viewCounts: 12,
          createdAt: '2019-11-20T06:25:42.930Z',
          updatedAt: '2019-11-20T06:58:40.142Z',
          CategoryId: null
        }
      },
      {
        id: 142,
        text: 'Placeat sint voluptatem voluptatem unde.',
        UserId: 2,
        RestaurantId: 42,
        createdAt: '2019-11-20T06:25:42.948Z',
        updatedAt: '2019-11-20T06:25:42.948Z',
        Restaurant: {
          id: 42,
          name: 'Derek Shields MD',
          tel: '158-995-6038',
          address: '3403 Ortiz Inlet',
          opening_hours: '08:00',
          description:
            'Velit suscipit soluta. Sint deleniti magni quaerat voluptatibus dignissimos hic quia. Pariatur voluptas recusandae impedit voluptatem velit. Deserunt qui odio est vel quisquam et iste quo.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=49.09923471680735',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.931Z',
          updatedAt: '2019-11-20T06:25:42.931Z',
          CategoryId: null
        }
      },
      {
        id: 143,
        text: 'Neque non fugit nulla fugit quia sunt et.',
        UserId: 2,
        RestaurantId: 43,
        createdAt: '2019-11-20T06:25:42.948Z',
        updatedAt: '2019-11-20T06:25:42.948Z',
        Restaurant: {
          id: 43,
          name: 'Dr. Magdalen Davis',
          tel: '(424) 983-9590 x24645',
          address: '45584 Claudia Green',
          opening_hours: '08:00',
          description:
            'Rerum atque placeat non. Sint esse maiores iste commodi magnam modi laborum. Distinctio ut aliquid sed sapiente et quo commodi odio enim. Sit quidem nobis sunt tempora perspiciatis nemo voluptatem nesciunt. Qui est voluptas cupiditate tempora dolores laudantium quis quia quis. Rem autem temporibus fugit deserunt.\n \rQuam placeat illum nihil sunt expedita nisi reprehenderit. Eaque dolor optio iure qui aut non. Adipisci corrupti et ullam eius explicabo incidunt. Nesciunt id cum sapiente voluptates odit eius laborum. Necessitatibus at non non. Quisquam voluptas eveniet eveniet praesentium.\n \rEsse doloribus iure quia mollitia velit ipsa tenetur deleniti. Consequatur incidunt blanditiis quidem et. Id autem iste voluptatum sint deserunt et. Quod velit a. Pariatur culpa autem aspernatur dignissimos cum quos animi. Qui eligendi voluptatem.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=11.101761113142405',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.932Z',
          updatedAt: '2019-11-20T06:25:42.932Z',
          CategoryId: null
        }
      },
      {
        id: 144,
        text:
          'Voluptate qui consequuntur ratione atque deserunt doloribus eligendi.',
        UserId: 2,
        RestaurantId: 44,
        createdAt: '2019-11-20T06:25:42.948Z',
        updatedAt: '2019-11-20T06:25:42.948Z',
        Restaurant: {
          id: 44,
          name: 'Citlalli Grady',
          tel: '274-150-1828 x8337',
          address: '054 Ewell Route',
          opening_hours: '08:00',
          description: 'Molestiae cum sit sunt delectus.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=15.185966372644089',
          viewCounts: null,
          createdAt: '2019-11-20T06:25:42.932Z',
          updatedAt: '2019-11-20T06:25:42.932Z',
          CategoryId: null
        }
      },
      {
        id: 151,
        text: 'Cool Restaurant',
        UserId: 2,
        RestaurantId: 2,
        createdAt: '2019-11-20T08:59:36.728Z',
        updatedAt: '2019-11-20T08:59:36.728Z',
        Restaurant: {
          id: 2,
          name: 'Kaci Koelpin',
          tel: '083-343-7765',
          address: '22769 Johnson Squares',
          opening_hours: '08:00',
          description:
            'Sequi facere sit iusto molestiae dolores quibusdam dolores. Labore deleniti beatae id. Qui quidem quibusdam fugiat qui harum odit voluptas. Beatae asperiores exercitationem quia commodi. Provident magnam sed expedita quibusdam labore aliquid hic.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=22.957592747300982',
          viewCounts: 123,
          createdAt: '2019-11-20T06:25:42.922Z',
          updatedAt: '2020-01-19T02:39:43.017Z',
          CategoryId: null
        }
      },
      {
        id: 187,
        text: 'test',
        UserId: 2,
        RestaurantId: 51,
        createdAt: '2019-12-10T13:50:29.919Z',
        updatedAt: '2019-12-10T13:50:29.919Z',
        Restaurant: {
          id: 51,
          name: '發大財0121牛排',
          tel: '12345678',
          address: '高雄市',
          opening_hours: '00:00',
          description: '123',
          image: 'https://i.imgur.com/CaeM9rg.jpg',
          viewCounts: 27,
          createdAt: '2019-11-22T06:50:58.472Z',
          updatedAt: '2020-02-11T03:49:29.072Z',
          CategoryId: 6
        }
      },
      {
        id: 188,
        text: '111',
        UserId: 2,
        RestaurantId: 51,
        createdAt: '2019-12-10T13:56:42.119Z',
        updatedAt: '2019-12-10T13:56:42.119Z',
        Restaurant: {
          id: 51,
          name: '發大財0121牛排',
          tel: '12345678',
          address: '高雄市',
          opening_hours: '00:00',
          description: '123',
          image: 'https://i.imgur.com/CaeM9rg.jpg',
          viewCounts: 27,
          createdAt: '2019-11-22T06:50:58.472Z',
          updatedAt: '2020-02-11T03:49:29.072Z',
          CategoryId: 6
        }
      },
      {
        id: 193,
        text: 'test3test3',
        UserId: 2,
        RestaurantId: 50,
        createdAt: '2020-01-12T13:57:18.580Z',
        updatedAt: '2020-01-12T13:57:18.580Z',
        Restaurant: {
          id: 50,
          name: 'Jolie Hackett',
          tel: '542.600.9620',
          address: '2439 Tiffany Heights',
          opening_hours: '08:00',
          description: 'magni ut voluptas',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=27.32287991372693',
          viewCounts: 8,
          createdAt: '2019-11-20T06:25:42.934Z',
          updatedAt: '2020-01-21T12:34:18.056Z',
          CategoryId: null
        }
      }
    ],
    FavoritedRestaurants: [
      {
        id: 14,
        name: 'Rahul Kilback',
        tel: '1-573-027-3190',
        address: '13538 Lula Roads',
        opening_hours: '08:00',
        description:
          'Ut ea repellat cumque illo sint. Possimus a magni iusto molestiae explicabo. Impedit ea magni vel quaerat hic exercitationem nemo alias dolor. Eum rem harum soluta voluptas consequatur.\r\n \r\nSaepe ut deserunt eaque magni nulla omnis aut aut. Vel voluptate enim aut autem incidunt. Sit expedita alias quis pariatur sit. Itaque et dolorem veniam sed reprehenderit aut. Nisi vero exercitationem quibusdam sed vitae iure modi et porro.\r\n \r\nRerum inventore suscipit sequi id optio nemo deserunt tempore. Ab blanditiis libero sed ut eum. Sit doloribus veritatis porro dolor impedit excepturi iste voluptatem. Consequatur iste dolore vero.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=66.19683181847653',
        viewCounts: 77,
        createdAt: '2019-11-20T06:25:42.925Z',
        updatedAt: '2020-02-16T05:36:07.120Z',
        CategoryId: 7,
        Favorite: {
          UserId: 2,
          RestaurantId: 14,
          createdAt: '2020-01-12T14:58:04.174Z',
          updatedAt: '2020-01-12T14:58:04.174Z'
        }
      },
      {
        id: 50,
        name: 'Jolie Hackett',
        tel: '542.600.9620',
        address: '2439 Tiffany Heights',
        opening_hours: '08:00',
        description: 'magni ut voluptas',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=27.32287991372693',
        viewCounts: 8,
        createdAt: '2019-11-20T06:25:42.934Z',
        updatedAt: '2020-01-21T12:34:18.056Z',
        CategoryId: null,
        Favorite: {
          UserId: 2,
          RestaurantId: 50,
          createdAt: '2019-12-08T15:59:49.568Z',
          updatedAt: '2019-12-08T15:59:49.568Z'
        }
      }
    ],
    Followers: [
      {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.685Z',
        updatedAt: '2019-11-21T09:55:30.970Z',
        Followship: {
          followerId: 2,
          followingId: 2,
          createdAt: '2019-12-08T15:48:13.364Z',
          updatedAt: '2019-12-08T15:48:13.364Z'
        }
      },
      {
        id: 1,
        name: 'root1',
        email: 'root@example.com',
        password:
          '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
        isAdmin: true,
        image: null,
        createdAt: '2019-11-20T06:25:42.456Z',
        updatedAt: '2019-11-25T06:53:28.542Z',
        Followship: {
          followerId: 1,
          followingId: 2,
          createdAt: '2020-01-21T12:52:03.002Z',
          updatedAt: '2020-01-21T12:52:03.002Z'
        }
      }
    ],
    Followings: [
      {
        id: 5,
        name: 'lib4',
        email: 'lib4@example.com',
        password:
          '$2a$10$wgBCTWhLICljONe9dThbB.IQYVrg0yo6ryzQfQIGXQWrUVx0y5gbq',
        isAdmin: null,
        image: null,
        createdAt: '2019-11-20T07:25:42.952Z',
        updatedAt: '2019-11-20T07:25:42.952Z',
        Followship: {
          followerId: 2,
          followingId: 5,
          createdAt: '2019-12-08T15:35:54.743Z',
          updatedAt: '2019-12-08T15:35:54.743Z'
        }
      },
      {
        id: 11,
        name: 'root2',
        email: 'root234@example.com',
        password:
          '$2a$10$vsMynB05b9ehsom/gnRtcOvBlYDj2oIKnf83.kGOumqoB2DGXPPSK',
        isAdmin: null,
        image: null,
        createdAt: '2019-11-22T08:36:56.461Z',
        updatedAt: '2019-11-22T08:36:56.461Z',
        Followship: {
          followerId: 2,
          followingId: 11,
          createdAt: '2019-12-08T15:47:59.381Z',
          updatedAt: '2019-12-08T15:47:59.381Z'
        }
      },
      {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
        isAdmin: false,
        image: null,
        createdAt: '2019-11-20T06:25:42.685Z',
        updatedAt: '2019-11-21T09:55:30.970Z',
        Followship: {
          followerId: 2,
          followingId: 2,
          createdAt: '2019-12-08T15:48:13.364Z',
          updatedAt: '2019-12-08T15:48:13.364Z'
        }
      },
      {
        id: 6,
        name: 'libtest7',
        email: 'lib5@example.com',
        password:
          '$2a$10$llXbyURDYwEAZtfAhwHcxOfaneQms1wTtMWiRYqTph5Iec7iL3bUy',
        isAdmin: null,
        image: null,
        createdAt: '2019-11-20T07:26:36.838Z',
        updatedAt: '2019-11-21T09:43:00.954Z',
        Followship: {
          followerId: 2,
          followingId: 6,
          createdAt: '2019-12-08T15:48:14.947Z',
          updatedAt: '2019-12-08T15:48:14.947Z'
        }
      },
      {
        id: 1,
        name: 'root1',
        email: 'root@example.com',
        password:
          '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
        isAdmin: true,
        image: null,
        createdAt: '2019-11-20T06:25:42.456Z',
        updatedAt: '2019-11-25T06:53:28.542Z',
        Followship: {
          followerId: 2,
          followingId: 1,
          createdAt: '2019-12-08T15:49:34.851Z',
          updatedAt: '2019-12-08T15:49:34.851Z'
        }
      }
    ]
  },
  isFollowed: true
}
export default {
  name: 'User',
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: []
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser (userId) {
      const { profile, isFollowed } = dummyData
      const {
        id,
        image,
        name,
        email,
        Followings,
        Followers,
        Comments,
        FavoritedRestaurants
      } = profile

      this.user = {
        ...this.user,
        id,
        image,
        name,
        email,
        followingsLength: Followings.length,
        followersLength: Followers.length,
        commentsLength: Comments.length,
        favoritedRestaurantsLength: FavoritedRestaurants.length
      }

      this.isFollowed = isFollowed

      this.followings = Followings
      this.followers = Followers
      this.favoritedRestaurants = FavoritedRestaurants
      this.comments = Comments.filter(comment => comment.Restaurant)
    }
  }
}
</script>
