<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id }}"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 143,
      name: 'testrestaurant',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2020-01-19T03:04:21.188Z',
      updatedAt: '2020-01-19T03:04:21.188Z',
      CategoryId: 109,
      Category: {
        id: 109,
        name: 'cool',
        createdAt: '2019-12-17T11:36:08.937Z',
        updatedAt: '2019-12-17T11:36:08.937Z'
      }
    },
    {
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
      CategoryId: 6,
      Category: {
        id: 6,
        name: '美式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 144,
      name: '麥當當',
      tel: '123',
      address: '麥當勞總部',
      opening_hours: '03:33',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2020-02-16T05:09:24.297Z',
      updatedAt: '2020-02-16T05:09:24.297Z',
      CategoryId: 6,
      Category: {
        id: 6,
        name: '美式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
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
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 29,
      name: 'Mrs. Deonte Schmeler',
      tel: '694-889-1934',
      address: '4833 Ila Causeway',
      opening_hours: '08:00',
      description:
        'Ut officia pariatur quam perferendis quia nihil expedita.\nSunt quis voluptatibus cupiditate est quis provident quae ipsa.\nIste at consequatur optio qui alias iste consequatur velit.\nEt nesciunt voluptas.\nEt id velit.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=33.27090568354101',
      viewCounts: 9,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2020-02-16T05:35:11.396Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 26,
      name: 'Dayna Roberts',
      tel: '759-389-2695',
      address: '9850 Kaia Circle',
      opening_hours: '08:00',
      description: 'ipsum',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=3.7178880115385837',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2019-11-20T06:25:42.928Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 99,
      name: 'cool',
      tel: '457291867',
      address: '26 Bluegrass Street',
      opening_hours: '13:02',
      description: 'coolcoolcool',
      image: 'https://i.imgur.com/OC8nekt.png',
      viewCounts: null,
      createdAt: '2019-12-09T02:50:06.794Z',
      updatedAt: '2019-12-09T02:50:06.794Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 25,
      name: 'Webster Dietrich',
      tel: '1-653-478-8294 x018',
      address: '229 Predovic Lodge',
      opening_hours: '08:00',
      description: 'Qui consequuntur est quo.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=37.893799230224204',
      viewCounts: 17,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2020-01-18T11:44:28.915Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 32,
      name: 'Trever Cole',
      tel: '570-434-5010',
      address: '9157 Bernier Parks',
      opening_hours: '08:00',
      description:
        'Molestiae provident quia rerum omnis rerum. Quia adipisci reprehenderit. Nisi voluptatem nisi facere. Voluptatem distinctio ut eos.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=92.63836618053767',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.929Z',
      updatedAt: '2019-11-20T06:25:42.929Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 39,
      name: 'Kirk Rosenbaum',
      tel: '(819) 758-2128 x85915',
      address: '707 Conroy Trace',
      opening_hours: '08:00',
      description: 'Ratione rem aut qui et soluta sint qui officiis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=93.61331373873116',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.931Z',
      updatedAt: '2019-11-20T06:25:42.931Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 28,
      name: 'Earl Kohler',
      tel: '234.268.7177 x25276',
      address: '021 Moore Motorway',
      opening_hours: '08:00',
      description: 'qui qui consequatur',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=85.94426264459874',
      viewCounts: 23,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2020-02-16T05:41:25.305Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 53,
      name: '素食',
      tel: '12345678',
      address: 'wqeqwe',
      opening_hours: '01:59',
      description: 'qweqe',
      image: null,
      viewCounts: 3,
      createdAt: '2019-11-22T06:51:45.306Z',
      updatedAt: '2019-12-10T12:53:48.974Z',
      CategoryId: 6,
      Category: {
        id: 6,
        name: '美式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
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
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 47,
      name: 'Rafael Murray',
      tel: '415.165.4928',
      address: '6067 Nader Square',
      opening_hours: '08:00',
      description:
        'Sint explicabo dolor. Est libero saepe ullam hic deleniti. Consequatur harum in ducimus nemo eius veniam qui.\n \rRatione adipisci maiores quia voluptas nulla. Nulla iusto ut omnis ex ipsa unde. Et assumenda non vero similique facere.\n \rIn reiciendis accusamus maiores quis facere dignissimos et. Ut numquam officia earum et quas. Molestiae eligendi commodi ea ut. Qui et et eos atque iusto excepturi esse consectetur. Eum quasi reiciendis voluptas id earum eum nobis voluptatem enim.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=75.07568802989297',
      viewCounts: null,
      createdAt: '2019-11-20T06:25:42.933Z',
      updatedAt: '2019-11-20T06:25:42.933Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 54,
      name: 'retetret',
      tel: 'retertrt',
      address: 'ertretre',
      opening_hours: '01:00',
      description: 'ertetrete',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-22T06:57:24.615Z',
      updatedAt: '2019-11-22T06:57:24.615Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 95,
      name: 'rghdfhfdh',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2019-12-05T08:55:54.669Z',
      updatedAt: '2019-12-05T08:55:54.669Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 96,
      name: 'dfgdfhgdfh xfghfgxh',
      tel: 'xfgxgfbxfb',
      address: 'dzfbdfzbzfbzs',
      opening_hours: '12:59',
      description: 'AFAScsddggrhHFJSGFJFDGsdF',
      image: 'https://i.imgur.com/oOHdiBw.jpg',
      viewCounts: null,
      createdAt: '2019-12-05T09:11:11.111Z',
      updatedAt: '2019-12-05T09:11:11.111Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 5,
      name: 'Abagail Dietrich',
      tel: '638.352.6637 x5805',
      address: '011 Glenna Camp',
      opening_hours: '08:00',
      description:
        'Cumque quasi nihil. Dicta accusantium officiis assumenda ut eaque qui ullam ut. Iure in qui adipisci.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=60.98596097768254',
      viewCounts: 37,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:18:04.644Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 7,
      name: 'Kari Sporer',
      tel: '584-434-6976',
      address: '941 Jakubowski Stream',
      opening_hours: '08:00',
      description: 'sunt dolorem voluptate',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.77439621389972',
      viewCounts: 1,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:30:22.808Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 8,
      name: 'Bradley Kiehn',
      tel: '453.101.0729',
      address: '0173 Wilfredo Shores',
      opening_hours: '08:00',
      description: 'qui',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=83.09110863923424',
      viewCounts: 1,
      createdAt: '2019-11-20T06:25:42.923Z',
      updatedAt: '2019-11-23T14:30:28.959Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 15,
      name: 'Vinnie Beier',
      tel: '(147) 768-4416 x06977',
      address: '91390 VonRueden Ferry',
      opening_hours: '08:00',
      description:
        'Deserunt molestiae deleniti in asperiores dolorum asperiores qui consequatur et. Et id est asperiores distinctio sit voluptate sint dolores. Dicta et consequuntur. Dolores tenetur et illo animi eligendi eum tempora. Ipsum repellat autem tempora ut nemo id vero qui.\r\n \r\nQuo occaecati eaque. Sint sequi rerum incidunt ipsa. Fuga vel et. Ab ipsam deserunt rem et earum numquam. Quae fugit harum officiis quo. Asperiores fugit illum sed aut possimus vitae.\r\n \r\nUt delectus soluta qui. Provident aut quibusdam. Et omnis voluptatum voluptatem totam rerum at quaerat.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=8.851357212949207',
      viewCounts: 136,
      createdAt: '2019-11-20T06:25:42.925Z',
      updatedAt: '2020-01-12T15:24:41.331Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 103,
      name: 'testvvvv',
      tel: '020002222',
      address: 'st.Road',
      opening_hours: '00:00',
      description: '',
      image: 'https://i.imgur.com/nsmu4r6.jpg',
      viewCounts: null,
      createdAt: '2019-12-29T04:10:12.163Z',
      updatedAt: '2019-12-29T04:10:12.163Z',
      CategoryId: 6,
      Category: {
        id: 6,
        name: '美式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 97,
      name: 'DGGSXFG',
      tel: '04534545',
      address: 'XDFGZSDFGZJFZFGAD',
      opening_hours: '12:59',
      description: 'XDFGBSZFDGZZSDFGsdg',
      image: 'https://i.imgur.com/QOX4UzQ.jpg',
      viewCounts: null,
      createdAt: '2019-12-05T09:11:37.628Z',
      updatedAt: '2019-12-05T09:11:37.628Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 109,
      name: 'asd',
      tel: '083-343-7765',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2020-01-08T14:03:07.273Z',
      updatedAt: '2020-01-08T14:03:07.273Z',
      CategoryId: 109,
      Category: {
        id: 109,
        name: 'cool',
        createdAt: '2019-12-17T11:36:08.937Z',
        updatedAt: '2019-12-17T11:36:08.937Z'
      }
    },
    {
      id: 142,
      name: 'test1233',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2020-01-12T11:58:30.114Z',
      updatedAt: '2020-01-12T11:58:30.114Z',
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 104,
      name: '餐廳種子資料都沒category',
      tel: '020002222',
      address: 'st.Road',
      opening_hours: '00:00',
      description: '',
      image: 'https://i.imgur.com/9b88oCl.jpg',
      viewCounts: null,
      createdAt: '2019-12-29T04:12:02.664Z',
      updatedAt: '2019-12-29T04:12:02.664Z',
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 59,
      name: 'test11',
      tel: '123',
      address: '123',
      opening_hours: '12:59',
      description: 'dd',
      image: 'https://i.imgur.com/J977QZe.jpg',
      viewCounts: null,
      createdAt: '2019-11-23T14:37:12.845Z',
      updatedAt: '2020-01-12T17:20:56.999Z',
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 60,
      name: 'yyyyy',
      tel: '',
      address: '',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-23T14:41:55.478Z',
      updatedAt: '2019-11-23T14:41:55.478Z',
      CategoryId: null,
      Category: null
    },
    {
      id: 105,
      name: 'testv',
      tel: '020002222',
      address: 'st.Road',
      opening_hours: '01:00',
      description: '',
      image: 'https://i.imgur.com/7ZpjPIA.jpg',
      viewCounts: null,
      createdAt: '2019-12-29T04:53:35.616Z',
      updatedAt: '2019-12-29T04:53:35.616Z',
      CategoryId: 7,
      Category: {
        id: 7,
        name: '複合式料理',
        createdAt: '2019-11-20T06:25:42.917Z',
        updatedAt: '2019-11-20T06:25:42.917Z'
      }
    },
    {
      id: 58,
      name: 'test1 234567',
      tel: '0988888888',
      address: 'New Taipei City',
      opening_hours: '',
      description: '',
      image: null,
      viewCounts: null,
      createdAt: '2019-11-23T07:40:54.401Z',
      updatedAt: '2019-11-23T11:12:31.210Z',
      CategoryId: null,
      Category: null
    },
    {
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
      CategoryId: null,
      Category: null
    },
    {
      id: 27,
      name: 'Jean Reichert',
      tel: '(979) 733-0015',
      address: '4084 Arvilla Avenue',
      opening_hours: '08:00',
      description: 'assumenda impedit ut',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=24.17100664017355',
      viewCounts: 9,
      createdAt: '2019-11-20T06:25:42.928Z',
      updatedAt: '2019-12-26T04:59:49.780Z',
      CategoryId: null,
      Category: null
    }
  ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant (restaurantId) {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  }
}
</script>
