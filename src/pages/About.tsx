import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { CompanyInfo } from '../types';

const About: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        setLoading(true);
        const data = await apiService.getCompanyInfo();
        setCompanyInfo(data);
      } catch (err) {
        setError('Failed to fetch company information');
        console.error('Error fetching company info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (loading) {
    return (
      <div className="page-content">
        <div className="loading">Loading company information...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-content">
        <div className="error">{error}</div>
      </div>
    );
  }

  if (!companyInfo) {
    return (
      <div className="page-content">
        <div className="error">No company information available</div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h1 className="page-title">About {companyInfo.companyName}</h1>
      <div className="about-content">
        <div className="about-section">
          <h3>Our Story</h3>
          <p>{companyInfo.description}</p>
          <p><strong>Established:</strong> {companyInfo.yearEstablished}</p>
        </div>

        <div className="about-section">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> {companyInfo.address}</p>
          <p><strong>Phone:</strong> {companyInfo.phone}</p>
          <p><strong>Email:</strong> {companyInfo.email}</p>
        </div>

        <div className="about-section">
          <h3>Our Services</h3>
          <div className="services-list">
            {companyInfo.services.map((service, index) => (
              <div key={index} className="service-item">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;