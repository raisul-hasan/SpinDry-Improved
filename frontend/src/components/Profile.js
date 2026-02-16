import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await authAPI.profile();
        const data = response?.data || null;
        setProfile(data);
        setFormData({
          name: data?.name || '',
          email: data?.email || '',
          phone: data?.phone || '',
          address: data?.address || ''
        });
      } catch (err) {
        setError('Please log in to view your profile.');
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      ...formData
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="profile-page">
      <section className="profile-header">
        <div className="container">
          <h1>My Profile</h1>
          <p>Manage your account details and view activity</p>
        </div>
      </section>

      <section className="profile-content">
        <div className="container">
          {error ? (
            <div className="profile-card">
              <p className="profile-error">{error}</p>
              <Link to="/login" className="thm-btn cta-button">Log In</Link>
            </div>
          ) : (
            <div className="profile-card">
              <div className="profile-header-row">
                <h2>Account Details</h2>
                <button
                  type="button"
                  className="profile-link"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              {isEditing ? (
                <form className="profile-form" onSubmit={handleSave}>
                  <div className="profile-form-row">
                    <div className="profile-field">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile-field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="profile-form-row">
                    <div className="profile-field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile-field">
                      <label htmlFor="address">Address</label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="profile-actions">
                    <button type="submit" className="thm-btn cta-button">Save Changes</button>
                  </div>
                </form>
              ) : (
                <div className="profile-grid">
                  <div className="profile-item">
                    <span className="label">Name</span>
                    <span className="value">{profile?.name || 'Guest User'}</span>
                  </div>
                  <div className="profile-item">
                    <span className="label">Email</span>
                    <span className="value">{profile?.email || 'Not available'}</span>
                  </div>
                  <div className="profile-item">
                    <span className="label">Phone</span>
                    <span className="value">{profile?.phone || 'Not provided'}</span>
                  </div>
                  <div className="profile-item">
                    <span className="label">Address</span>
                    <span className="value">{profile?.address || 'Not provided'}</span>
                  </div>
                </div>
              )}

              <div className="profile-actions">
                <Link to="/orders" className="thm-btn cta-button">View Orders</Link>
                <button type="button" className="profile-link" onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
