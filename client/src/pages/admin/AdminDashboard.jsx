import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  Eye,
  Download
} from 'lucide-react';
import { dashboardApi } from '../../services/adminApi';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const data = await dashboardApi.getStats();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Failed to load dashboard data</p>
        <Button onClick={fetchDashboardStats} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Contacts',
      value: stats.totalContacts,
      icon: Users,
      description: 'All time contacts',
      color: 'text-blue-600'
    },
    {
      title: 'Today',
      value: stats.todayContacts,
      icon: Calendar,
      description: 'Contacts today',
      color: 'text-green-600'
    },
    {
      title: 'This Week',
      value: stats.weekContacts,
      icon: TrendingUp,
      description: 'Contacts this week',
      color: 'text-orange-600'
    },
    {
      title: 'This Month',
      value: stats.monthContacts,
      icon: MessageSquare,
      description: 'Contacts this month',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your contacts.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button onClick={() => navigate('/admin/contacts')}>
            <Eye className="mr-2 h-4 w-4" />
            View Contacts
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Contacts</CardTitle>
            <CardDescription>
              Latest contact form submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentContacts.length > 0 ? (
                stats.recentContacts.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {contact.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.email}
                      </p>
                      {contact.company && (
                        <p className="text-xs text-muted-foreground">
                          {contact.company}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      {contact.service && (
                        <Badge variant="secondary" className="text-xs">
                          {contact.service}
                        </Badge>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No recent contacts</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Top Services */}
        <Card>
          <CardHeader>
            <CardTitle>Top Services</CardTitle>
            <CardDescription>
              Most requested services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.contactsByService.length > 0 ? (
                stats.contactsByService.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{service._id}</Badge>
                    </div>
                    <span className="text-sm font-medium">{service.count}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No service data available</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
