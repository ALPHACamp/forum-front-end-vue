<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'

const dummyData = {
  users: [
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea',
      isAdmin: false,
      image: null,
      createdAt: '2019-11-20T06:25:42.909Z',
      updatedAt: '2019-11-20T06:25:42.909Z'
    },
    {
      id: 4,
      name: 'lib8186',
      email: 'lib3@example.com',
      password: '$2a$10$rjYLC02gZK3Ry2/.sPFfqeF02C7mQjKc5vDcybqDVlvYSw96lepda',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-20T06:37:12.860Z',
      updatedAt: '2019-11-20T06:48:50.976Z'
    },
    {
      id: 5,
      name: 'lib4',
      email: 'lib4@example.com',
      password: '$2a$10$wgBCTWhLICljONe9dThbB.IQYVrg0yo6ryzQfQIGXQWrUVx0y5gbq',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-20T07:25:42.952Z',
      updatedAt: '2019-11-20T07:25:42.952Z'
    },
    {
      id: 7,
      name: 'libtest',
      email: 'libtest@example.com',
      password: '$2a$10$XnxP9x.3MLAt3rlJpnQA1eT6P.p1e/1oBDOGUYbBKT1EFd4Kctma2',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-20T07:27:34.815Z',
      updatedAt: '2019-11-20T07:27:34.815Z'
    },
    {
      id: 8,
      name: 'libtest1',
      email: 'libtest1@example.com',
      password: '$2a$10$VUnjsvkS54lQpIWj8j.FpuLPja05KrRYAs6NxxMHrVEJ./48rByxO',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-20T07:31:27.326Z',
      updatedAt: '2019-11-20T07:31:27.326Z'
    },
    {
      id: 9,
      name: 'libtest2',
      email: 'libtest2@example.com',
      password: '$2a$10$Fh/WFu8EEiAXyzrFbSyHRuHmzUIlasisWYXY8n7lr3gTd6QXvrAO6',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-20T07:36:36.213Z',
      updatedAt: '2019-11-20T07:36:36.213Z'
    },
    {
      id: 10,
      name: 'libtest5',
      email: 'libtest5@example.com',
      password: '$2a$10$uDas2Caoev71EoPqLdTy5./Y8fy5kMsatuYiOsxBK/aBAibmEpR96',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-20T07:41:04.233Z',
      updatedAt: '2019-11-20T07:41:04.233Z'
    },
    {
      id: 6,
      name: 'libtest7',
      email: 'lib5@example.com',
      password: '$2a$10$llXbyURDYwEAZtfAhwHcxOfaneQms1wTtMWiRYqTph5Iec7iL3bUy',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-20T07:26:36.838Z',
      updatedAt: '2019-11-21T09:43:00.954Z'
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy',
      isAdmin: false,
      image: null,
      createdAt: '2019-11-20T06:25:42.685Z',
      updatedAt: '2019-11-21T09:55:30.970Z'
    },
    {
      id: 11,
      name: 'root2',
      email: 'root234@example.com',
      password: '$2a$10$vsMynB05b9ehsom/gnRtcOvBlYDj2oIKnf83.kGOumqoB2DGXPPSK',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-22T08:36:56.461Z',
      updatedAt: '2019-11-22T08:36:56.461Z'
    },
    {
      id: 12,
      name: 'caesar test',
      email: '111@111',
      password: '$2a$10$FejnHvP2FXXr8D5acuUBPO4UJz1H9Xc2gZnfvo3Aj25zhxST9BIpS',
      isAdmin: null,
      image: null,
      createdAt: '2019-11-23T12:18:32.180Z',
      updatedAt: '2019-11-23T12:18:32.180Z'
    },
    {
      id: 1,
      name: 'root1',
      email: 'root@example.com',
      password: '$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G',
      isAdmin: true,
      image: null,
      createdAt: '2019-11-20T06:25:42.456Z',
      updatedAt: '2019-11-25T06:53:28.542Z'
    },
    {
      id: 45,
      name: 'vivitest',
      email: 'vivitest@example.com',
      password: '$2a$10$bFAcM6hduC3vWHnrR25yH.lfI.QsnPCC0PDCB/9tV6j0FX2liLjCq',
      isAdmin: true,
      image: null,
      createdAt: '2019-11-24T06:45:25.756Z',
      updatedAt: '2019-11-25T08:45:41.464Z'
    },
    {
      id: 46,
      name: 'nnn',
      email: 'aaa@example.com',
      password: '$2a$10$8Mx9jbREpLEeOhfo5GjCV.eT7FuvrxWS4KaEodTItigbNzjUQi2t2',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-07T10:15:20.706Z',
      updatedAt: '2019-12-07T10:15:20.706Z'
    },
    {
      id: 47,
      name: 'user3',
      email: 'user3@example.com',
      password: '$2a$10$5oSJw0eMp4alu8xY6WKAzemFIZms1MiAR6zJEGnZzcLjyt3j0DmdO',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-09T07:19:36.654Z',
      updatedAt: '2019-12-09T07:19:36.654Z'
    },
    {
      id: 48,
      name: 'minatest',
      email: 'minatest@example.com',
      password: '$2a$10$0qO8tBG.wj5rFYQR6Dn9cenqEnn.ADCGIosQWihiQESqSS.0sPs5e',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-09T08:11:52.287Z',
      updatedAt: '2019-12-09T08:11:52.287Z'
    },
    {
      id: 49,
      name: 'minatest2',
      email: 'minatest2@example.com',
      password: '$2a$10$raYl9cKbp3BHXNE7g1Ra5O6rKkKcIIdVZIqdxUFLEBAcuUSjxmWli',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-09T08:26:23.124Z',
      updatedAt: '2019-12-09T08:26:23.124Z'
    },
    {
      id: 50,
      name: 'tasty',
      email: 'tasty@example.com',
      password: '$2a$10$mz.O8in/4s9VD/e8cMRQB.nq1MowWjkhfOgy8cpnoWD2VvTYMJgPi',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-09T08:29:33.583Z',
      updatedAt: '2019-12-09T08:29:33.583Z'
    },
    {
      id: 51,
      name: '1',
      email: '12@a.com',
      password: '$2a$10$g9FUqFjH568nPa/zed24TOVyH.2fCECW9kqr1UAcKJ0C15H6TmMVS',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-15T11:06:37.109Z',
      updatedAt: '2019-12-15T11:06:37.109Z'
    },
    {
      id: 52,
      name: '1',
      email: '123@a.com',
      password: '$2a$10$CGB.k6Y9XLV6viHQKrnMIebKmmcblaGg/vhfEBsjaRsNYr375/sIu',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-15T11:28:48.798Z',
      updatedAt: '2019-12-15T11:28:48.798Z'
    },
    {
      id: 53,
      name: 'chenchen',
      email: '123@123.com',
      password: '$2a$10$whSUx15ZFMPkBT5zAsMC1uD5vwOpzcUNljbvdmM.Lvb1rTDDmuNsS',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-21T09:21:06.917Z',
      updatedAt: '2019-12-21T09:21:06.917Z'
    },
    {
      id: 54,
      name: 'test',
      email: 'tset@gmail.com',
      password: '$2a$10$GQzgnJZLZQ0y/1eEPoNOt.9b.sZq/FBdbri59Dx1vjQADa6QE7zCW',
      isAdmin: null,
      image: null,
      createdAt: '2019-12-25T08:54:21.024Z',
      updatedAt: '2019-12-25T08:54:21.024Z'
    },
    {
      id: 55,
      name: null,
      email: 'ttt@example.com',
      password: '$2a$10$CvTj3QfmNPnTywOIL/F.PO9xBIrhOYo1kjW4VyUrfgMZF9bWMasd6',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-12T12:14:03.401Z',
      updatedAt: '2020-01-12T12:14:03.401Z'
    },
    {
      id: 56,
      name: null,
      email: 'ttt2@example.com',
      password: '$2a$10$7jQJAAOoylFnMLYxbgwJZembDi2s1XSNbYTC5oU8RE6gvaiSlzm0C',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-12T12:14:36.929Z',
      updatedAt: '2020-01-12T12:14:36.929Z'
    },
    {
      id: 57,
      name: null,
      email: 'root1@example.com',
      password: '$2a$10$.RdhtH1eLnuI0ADcVUYFDewXWaKQfPgWz35RzmiIMMhRJ0w6Bp.ju',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-12T12:51:18.124Z',
      updatedAt: '2020-01-12T12:51:18.124Z'
    },
    {
      id: 58,
      name: null,
      email: 'ttt23@example.com',
      password: '$2a$10$AazkOZGwuNUMlctC0yxWWenasldS47ki7Pol/VcnVHCg40UWVZDVC',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-12T12:58:15.797Z',
      updatedAt: '2020-01-12T12:58:15.797Z'
    },
    {
      id: 59,
      name: '123',
      email: 'test123@123.com',
      password: '$2a$10$65GLoXU6RkAXx/O5KpBA6OdzoBCtXMd56ua.p9JmOyFONRX70O37.',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-12T13:17:51.967Z',
      updatedAt: '2020-01-12T13:17:51.967Z'
    },
    {
      id: 60,
      name: 'chenchen',
      email: '1233@333',
      password: '$2a$10$MZzhORDeq9yO9n5/2YeCgeroJZRkoJ9pclA3WD5YQdrwv/cN0LUoq',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-13T12:50:31.139Z',
      updatedAt: '2020-01-13T12:50:31.139Z'
    },
    {
      id: 61,
      name: '333',
      email: '12123333@com.tw',
      password: '$2a$10$oDV5SgOOHHCTvg1qMKPnGOJJVCzc4m3M3zeGcxssb9cIeMTTxeh2m',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-13T12:54:56.518Z',
      updatedAt: '2020-01-13T12:54:56.518Z'
    },
    {
      id: 62,
      name: 'testtesttest',
      email: 'test123@test.tw',
      password: '$2a$10$cTh76RpzfCndekqRh4xgnutyMDAtxSeXRVNwsnREjspb5k/5bpe2m',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-19T02:57:39.053Z',
      updatedAt: '2020-01-19T02:57:39.053Z'
    },
    {
      id: 63,
      name: 'wetest',
      email: 'ttt@test.com',
      password: '$2a$10$.54ytOKBgUprrx19GpTAu.kFOz5zmQHZyvlSVRUdt.6NLpKUB9FxG',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-19T03:30:48.843Z',
      updatedAt: '2020-01-19T03:30:48.843Z'
    },
    {
      id: 64,
      name: 'test222',
      email: 'test222@ou.com',
      password: '$2a$10$JHz97tpgTM1dGo2Cu9amDOgr0czRsDk7LWOXaS8WlUEQ.xkqR.Jva',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-19T03:32:53.137Z',
      updatedAt: '2020-01-19T03:32:53.137Z'
    },
    {
      id: 65,
      name: 'createAtester',
      email: 'tester@com.com',
      password: '$2a$10$Mv.oC8yzA3GkJ9C1FV0vqOtsg.C3OmiS6prydm94K3zO7OUZccCbS',
      isAdmin: null,
      image: null,
      createdAt: '2020-01-19T03:34:08.778Z',
      updatedAt: '2020-01-19T03:34:08.778Z'
    },
    {
      id: 66,
      name: 'Zeljko',
      email: 'zeks1992@gmail.com',
      password: '$2a$10$FefhsU/bRR7jkYj67J3c1eZjUR9ktgVtIA.4wbYrCqZxBPC8U3iOK',
      isAdmin: null,
      image: null,
      createdAt: '2020-02-04T21:06:08.606Z',
      updatedAt: '2020-02-04T21:06:08.606Z'
    }
  ]
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: 'root1',
    email: 'root@example.com',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components: {
    AdminNav
  },
  data () {
    return {
      users: [],
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.users = dummyData.users
    },
    toggleUserRole ({ userId, isAdmin }) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !isAdmin
          }
        }

        return user
      })
    }
  }
}
</script>
