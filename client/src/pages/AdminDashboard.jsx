import { useLoaderData, useNavigate, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { FiTrendingUp, FiCheckCircle, FiClock, FiUsers } from 'react-icons/fi';
import customFetch from '../utils/customFetch';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/auth/admin/profile');
    return data.admin;
  } catch (error) {
    if (error?.response?.status === 401) {
      throw redirect('/admin');
    }
    throw error;
  }
};

const AdminDashboard = () => {
  const admin = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await customFetch.post('/auth/admin/logout');
      toast.success('Signed out successfully.');
      navigate('/admin');
    } catch {
      toast.error('Unable to sign out right now. Please try again.');
    }
  };

  const metrics = [
    {
      label: 'Active workspaces',
      value: '42',
      change: '+12% MoM',
      icon: <FiUsers className="text-lg text-orange-500" />,
    },
    {
      label: 'On-time releases',
      value: '96%',
      change: '+4% QoQ',
      icon: <FiCheckCircle className="text-lg text-orange-500" />,
    },
    {
      label: 'Delivery velocity',
      value: '18.4',
      change: 'Story points / day',
      icon: <FiTrendingUp className="text-lg text-orange-500" />,
    },
    {
      label: 'Average approval time',
      value: '3.1 hrs',
      change: 'Across governance workflows',
      icon: <FiClock className="text-lg text-orange-500" />,
    },
  ];

  const initiatives = [
    {
      name: 'AI governance rollout',
      owner: 'Regulatory council',
      status: 'In progress',
    },
    {
      name: 'Customer signal expansion',
      owner: 'Experience insights',
      status: 'Pilot phase',
    },
    {
      name: 'Discovery rituals revamp',
      owner: 'Product operations',
      status: 'Planning',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">Welcome back</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">{admin.email}</h1>
            <p className="mt-2 text-sm text-slate-600">
              Account created {dayjs(admin.createdAt).format('DD MMM YYYY')} · Last login{' '}
              {admin.lastLogin ? dayjs(admin.lastLogin).format('DD MMM YYYY HH:mm') : 'just now'}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="self-start rounded-md border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-50"
          >
            Sign out
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">{metric.label}</span>
                {metric.icon}
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-900">{metric.value}</p>
              <p className="text-xs text-slate-500">{metric.change}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-orange-100 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Active initiatives</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              {initiatives.map((initiative) => (
                <li key={initiative.name} className="flex items-center justify-between rounded-xl border border-orange-50 bg-orange-50/60 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">{initiative.name}</p>
                    <p className="text-xs text-slate-500">{initiative.owner}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase text-orange-600">
                    {initiative.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Governance alerts</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="rounded-xl bg-white px-4 py-3">
                No critical alerts. Continue monitoring automated review queues.
              </li>
              <li className="rounded-xl bg-white px-4 py-3">
                3 policy acknowledgements awaiting sign-off this week.
              </li>
              <li className="rounded-xl bg-white px-4 py-3">
                Upcoming model review: Customer retention predictor on 12 Feb.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
