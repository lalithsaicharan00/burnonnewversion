import React, { useState } from "react";
import {
  Star,
  Search,
  Filter,
  ChevronDown,
  Menu,
  ArrowLeft,
} from "lucide-react";
import { Grid, List, Download, Share2 } from "lucide-react";
import { FileText, Upload, Trash2, Clock, Calendar, Eye } from "lucide-react";
import {
  Printer,
  Edit,
  Info,
  Lock,
  MessageSquare,
  History,
  Bookmark,
  Copy,
  ExternalLink,
} from "lucide-react";

import {
  Bell,
  CreditCard,
  Briefcase,
  ChevronRight,
  MapPin,
  CheckCircle,
  Users,
  CloudSun,
  CalendarClock,
  ChevronLeft,
} from "lucide-react";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [docviewMode, docsetViewMode] = useState("document");
  const [twodocviewMode, twodocsetViewMode] = useState("comments");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("details");
  const [twoactiveTab, settwoActiveTab] = useState<string>("activity");
  const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
  const [selectedBusiness, setSelectedBusiness] = useState("Certified Radon");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const businesses = [
    {
      id: 1,
      name: "Certified Radon",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Kick Starter 1",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Kick Starter 2",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Kick Starter 3",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Kick Starter 4",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Kick Starter 5",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Kick Starter 6",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Kick Starter 7",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&auto=format&fit=crop",
    },
  ];

  const invoices = [
    {
      id: "#3036",
      amount: "$2,000.00",
      dueDate: "Mar 15, 2024",
      paymentDate: "Mar 15, 2024",
      type: "Cash",
    },
    {
      id: "#3036",
      amount: "$2,000.00",
      dueDate: "Mar 15, 2024",
      paymentDate: "Mar 15, 2024",
      type: "Cash",
    },
    {
      id: "#3037",
      amount: "$1,500.00",
      dueDate: "Mar 20, 2024",
      paymentDate: "Mar 20, 2024",
      type: "Cash",
    },
    {
      id: "#3038",
      amount: "$3,000.00",
      dueDate: "Mar 25, 2024",
      paymentDate: "Mar 25, 2024",
      type: "Cash",
    },
  ];

  const appointments = [
    {
      id: "#3036",
      date: "February 20, 2025",
      time: "3:01 PM",
      address: "1234 Houston Street, New York, NY 11222",
      technician: {
        name: "Lavina Chhabra",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=50&h=50&auto=format&fit=crop",
      },
    },
    {
      id: "#3036",
      date: "February 20, 2025",
      time: "3:01 PM",
      address: "1234 Houston Street, New York, NY 11222",
      technician: {
        name: "Lavina Chhabra",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=50&h=50&auto=format&fit=crop",
      },
    },
    {
      id: "#3037",
      date: "February 25, 2025",
      time: "2:00 PM",
      address: "5678 Broadway, New York, NY 11222",
      technician: {
        name: "John Smith",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=50&h=50&auto=format&fit=crop",
      },
    },
  ];

  const jobs = [
    {
      date: "Thursday, July 4th",
      address: "8703 East R L Thornton Freeway, Dallas, TX 75228",
      technician: "Vice Ganda",
      time: "12:00 AM - 2:30 PM",
      amount: "$2000.00",
    },
    {
      date: "Thursday, July 4th",
      address: "8703 East R L Thornton Freeway, Dallas, TX 75228",
      technician: "Vice Ganda",
      time: "12:00 AM - 2:30 PM",
      amount: "$2000.00",
    },
    {
      date: "Friday, July 5th",
      address: "9876 West Main Street, Dallas, TX 75228",
      technician: "John Doe",
      time: "10:00 AM - 12:30 PM",
      amount: "$1500.00",
    },
  ];

  // Calculate total amounts
  const calculateTotalInvoices = () => {
    return invoices
      .reduce((total, invoice) => {
        const amount = parseFloat(
          invoice.amount.replace("$", "").replace(",", "")
        );
        return total + amount;
      }, 0)
      .toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  const calculateTotalJobs = () => {
    return jobs
      .reduce((total, job) => {
        const amount = parseFloat(job.amount.replace("$", "").replace(",", ""));
        return total + amount;
      }, 0)
      .toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredBusinesses = businesses.filter((business) =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mock document data
  const document = {
    id: 1,
    title: "General Liability Insurance",
    category: "insurance",
    type: "pdf",
    size: "2.4 MB",
    date: "Feb 20, 2025",
    lastModified: "Feb 22, 2025",
    createdBy: "John Doe",
    description:
      "This document contains the general liability insurance policy for the business, covering property damage, bodily injury, and personal injury claims.",
    version: "1.2",
    status: "Active",
    expiryDate: "Feb 20, 2026",
    tags: ["insurance", "liability", "policy"],
    viewed: true,
    starred: true,
    comments: [
      {
        id: 1,
        user: "Jane Smith",
        date: "Feb 21, 2025",
        text: "Please review section 3.2 regarding coverage limits.",
      },
      {
        id: 2,
        user: "John Doe",
        date: "Feb 22, 2025",
        text: "Confirmed the coverage limits are correct as per our discussion.",
      },
    ],
    history: [
      {
        id: 1,
        action: "Created",
        user: "John Doe",
        date: "Feb 20, 2025",
      },
      {
        id: 2,
        action: "Viewed",
        user: "Jane Smith",
        date: "Feb 21, 2025",
      },
      {
        id: 3,
        action: "Commented",
        user: "Jane Smith",
        date: "Feb 21, 2025",
      },
      {
        id: 4,
        action: "Commented",
        user: "John Doe",
        date: "Feb 22, 2025",
      },
      {
        id: 5,
        action: "Modified",
        user: "John Doe",
        date: "Feb 22, 2025",
      },
    ],
    relatedDocuments: [
      {
        id: 2,
        title: "Worker's Compensation",
        type: "pdf",
      },
      {
        id: 3,
        title: "Auto Insurance Policy",
        type: "pdf",
      },
    ],
  };

  // Function to render document preview (mock)
  const renderDocumentPreview = () => {
    return (
      <div className="bg-gray-100 rounded-lg flex items-center justify-center h-[600px]">
        <div className="bg-white shadow-lg w-3/4 h-5/6 p-8 flex flex-col">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-xl font-bold text-[#333333]">
              General Liability Insurance Policy
            </h3>
            <p className="text-[#666666]">Policy Number: GL-2025-78945612</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            <p className="text-[#333333] mb-4">
              This General Liability Insurance Policy ("Policy") is entered into
              by and between Insurance Provider Co. ("Provider") and Business
              Name ("Insured").
            </p>

            <h4 className="font-bold text-[#333333] mb-2">1. COVERAGE</h4>
            <p className="text-[#333333] mb-4">
              Subject to all terms, conditions, and limitations of this Policy,
              the Provider agrees to pay on behalf of the Insured all sums which
              the Insured shall become legally obligated to pay as damages
              because of:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#333333]">
              <li>Bodily injury</li>
              <li>Property damage</li>
              <li>Personal and advertising injury</li>
            </ul>

            <h4 className="font-bold text-[#333333] mb-2">
              2. LIMITS OF LIABILITY
            </h4>
            <p className="text-[#333333] mb-4">
              The Provider's liability is limited as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#333333]">
              <li>$2,000,000 General Aggregate Limit</li>
              <li>$1,000,000 Each Occurrence Limit</li>
              <li>$1,000,000 Personal & Advertising Injury Limit</li>
              <li>$100,000 Fire Damage Limit (any one fire)</li>
              <li>$5,000 Medical Expense Limit (any one person)</li>
            </ul>

            <h4 className="font-bold text-[#333333] mb-2">3. POLICY PERIOD</h4>
            <p className="text-[#333333] mb-4">
              This Policy is effective from February 20, 2025 to February 20,
              2026, 12:01 AM standard time at the address of the Insured.
            </p>

            <div className="h-40"></div>
            <p className="text-[#666666] text-sm">Page 1 of 24</p>
          </div>
        </div>
      </div>
    );
  };

  // Mock data for documents
  const documents = [
    {
      id: 1,
      title: "General Liability Insurance",
      category: "insurance",
      type: "pdf",
      size: "2.4 MB",
      date: "Feb 20, 2025",
      viewed: true,
      starred: true,
    },
    {
      id: 2,
      title: "Worker's Compensation",
      category: "insurance",
      type: "pdf",
      size: "1.8 MB",
      date: "Feb 18, 2025",
      viewed: true,
      starred: false,
    },
    {
      id: 3,
      title: "Auto Insurance Policy",
      category: "insurance",
      type: "pdf",
      size: "3.2 MB",
      date: "Feb 15, 2025",
      viewed: true,
      starred: false,
    },
    {
      id: 4,
      title: "Business License",
      category: "legal",
      type: "pdf",
      size: "1.1 MB",
      date: "Feb 10, 2025",
      viewed: false,
      starred: true,
    },
    {
      id: 5,
      title: "Tax Return 2024",
      category: "financial",
      type: "pdf",
      size: "4.7 MB",
      date: "Feb 5, 2025",
      viewed: false,
      starred: true,
    },
    {
      id: 6,
      title: "Employee Handbook",
      category: "hr",
      type: "docx",
      size: "2.9 MB",
      date: "Jan 30, 2025",
      viewed: false,
      starred: false,
    },
    {
      id: 7,
      title: "Service Agreement Template",
      category: "legal",
      type: "docx",
      size: "1.5 MB",
      date: "Jan 25, 2025",
      viewed: false,
      starred: false,
    },
    {
      id: 8,
      title: "Marketing Plan 2025",
      category: "marketing",
      type: "pptx",
      size: "5.8 MB",
      date: "Jan 20, 2025",
      viewed: false,
      starred: false,
    },
    {
      id: 9,
      title: "Quarterly Financial Report",
      category: "financial",
      type: "xlsx",
      size: "3.4 MB",
      date: "Jan 15, 2025",
      viewed: false,
      starred: false,
    },
    {
      id: 10,
      title: "Customer Feedback Survey",
      category: "marketing",
      type: "pdf",
      size: "1.2 MB",
      date: "Jan 10, 2025",
      viewed: false,
      starred: false,
    },
    {
      id: 11,
      title: "Equipment Maintenance Schedule",
      category: "operations",
      type: "xlsx",
      size: "2.1 MB",
      date: "Jan 5, 2025",
      viewed: false,
      starred: false,
    },
    {
      id: 12,
      title: "Vendor Contracts",
      category: "legal",
      type: "pdf",
      size: "3.7 MB",
      date: "Dec 28, 2024",
      viewed: false,
      starred: false,
    },
  ];

  // Get unique categories for filter
  const categories = ["all", ...new Set(documents.map((doc) => doc.category))];

  // Filter documents based on search query and category
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      searchQuery === "" ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      filterCategory === "all" || doc.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort documents
  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "size") {
      return parseFloat(b.size) - parseFloat(a.size);
    }
    return 0;
  });

  // Get file icon based on type
  const getFileIcon = (type) => {
    return <FileText size={24} className="text-[#015594]" />;
  };

  // Mock data for photos
  const photos = [
    {
      id: 1,
      title: "Statue of Liberty",
      date: "Feb 20, 2025",
      url: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landmarks",
    },
    {
      id: 2,
      title: "Golden Gate Bridge",
      date: "Feb 18, 2025",
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landmarks",
    },
    {
      id: 3,
      title: "American Flag",
      date: "Feb 15, 2025",
      url: "https://images.unsplash.com/photo-1603060196485-65963c8eaed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "symbols",
    },
    {
      id: 4,
      title: "White House",
      date: "Feb 10, 2025",
      url: "https://images.unsplash.com/photo-1485394735640-56c0c7e1def8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landmarks",
    },
    {
      id: 5,
      title: "Mount Rushmore",
      date: "Feb 5, 2025",
      url: "https://images.unsplash.com/photo-1527684551009-4e06eb315aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landmarks",
    },
    {
      id: 6,
      title: "Grand Canyon",
      date: "Jan 30, 2025",
      url: "https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "nature",
    },
    {
      id: 7,
      title: "Niagara Falls",
      date: "Jan 25, 2025",
      url: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "nature",
    },
    {
      id: 8,
      title: "Empire State Building",
      date: "Jan 20, 2025",
      url: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landmarks",
    },
  ];

  // Filter photos based on search query
  const filteredPhotos = photos.filter((photo) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        photo.title.toLowerCase().includes(query) ||
        photo.category.toLowerCase().includes(query)
      );
    }
    return true;
  });

  // Sort photos
  const sortedPhotos = [...filteredPhotos].sort((a, b) => {
    if (sortBy === "newest") {
      return b.id - a.id;
    } else if (sortBy === "oldest") {
      return a.id - b.id;
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Mock data for reviews
  const reviews = [
    {
      id: 1,
      name: "Maudie",
      rating: 4,
      date: "Feb 20, 2025 | 3:01 PM",
      comment:
        "Itaque dolor fuga natus eveniet. Very professional service and timely delivery.",
      avatar: "M",
    },
    {
      id: 2,
      name: "Robert Johnson",
      rating: 5,
      date: "Feb 18, 2025 | 2:45 PM",
      comment:
        "Excellent work! The team was very responsive and delivered beyond my expectations.",
      avatar: "R",
    },
    {
      id: 3,
      name: "Sarah Miller",
      rating: 3,
      date: "Feb 15, 2025 | 11:20 AM",
      comment:
        "Good service overall, but there were some delays in communication.",
      avatar: "S",
    },
    {
      id: 4,
      name: "David Chen",
      rating: 5,
      date: "Feb 10, 2025 | 4:15 PM",
      comment:
        "Outstanding quality and attention to detail. Would definitely recommend!",
      avatar: "D",
    },
    {
      id: 5,
      name: "Emily Wilson",
      rating: 4,
      date: "Feb 5, 2025 | 9:30 AM",
      comment:
        "Very satisfied with the results. The team was professional and knowledgeable.",
      avatar: "E",
    },
    {
      id: 6,
      name: "Michael Brown",
      rating: 2,
      date: "Jan 30, 2025 | 1:45 PM",
      comment:
        "The service was okay, but I expected more for the price I paid.",
      avatar: "M",
    },
  ];

  // Filter reviews based on active filter and search query
  const filteredReviews = reviews.filter((review) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !review.name.toLowerCase().includes(query) &&
        !review.comment.toLowerCase().includes(query)
      ) {
        return false;
      }
    }

    if (activeFilter === "all") return true;
    if (activeFilter === "5star" && review.rating === 5) return true;
    if (activeFilter === "4star" && review.rating === 4) return true;
    if (activeFilter === "3star" && review.rating === 3) return true;
    if (activeFilter === "2star" && review.rating === 2) return true;
    if (activeFilter === "1star" && review.rating === 1) return true;

    return false;
  });

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "newest") {
      // For demo purposes, using the id as a proxy for date (higher id = newer)
      return b.id - a.id;
    } else if (sortBy === "oldest") {
      return a.id - b.id;
    } else if (sortBy === "highest") {
      return b.rating - a.rating;
    } else if (sortBy === "lowest") {
      return a.rating - b.rating;
    }
    return 0;
  });

  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const formattedRating = averageRating.toFixed(1);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-[#ECECEC]">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button className="mr-4 text-[#333333]">
                <Menu size={24} />
              </button>
              <h1 className="text-lg font-medium text-[#333333]">Overview</h1>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm bg-[#015594] text-white rounded">
                  Dashboard
                </button>
                <button className="px-4 py-1 text-sm bg-white text-[#666666] rounded">
                  Calendar
                </button>
              </div>
              <div className="ml-4 w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white">
                <span>JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Back button and page title */}
          <div className="flex items-center mb-6">
            <button className="flex items-center text-[#015594]">
              <ArrowLeft size={18} className="mr-1" />
              <span>Back to Dashboard</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 md:mb-0">
              Customer Reviews
            </h2>

            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reviews"
                  className="pl-10 pr-4 py-2 border border-[#ECECEC] rounded-md w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]"
                />
              </div>

              {/* Filter dropdown */}
              <div className="relative">
                <button className="flex items-center justify-between px-4 py-2 bg-white border border-[#ECECEC] rounded-md w-full md:w-48">
                  <div className="flex items-center">
                    <Filter size={18} className="mr-2 text-[#666666]" />
                    <span className="text-[#333333]">Filter by</span>
                  </div>
                  <ChevronDown size={18} className="text-[#666666]" />
                </button>

                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#ECECEC] rounded-md shadow-lg z-10 hidden">
                  <div className="p-2">
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        activeFilter === "all"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setActiveFilter("all")}
                    >
                      All Reviews
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        activeFilter === "5star"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setActiveFilter("5star")}
                    >
                      5 Star
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        activeFilter === "4star"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setActiveFilter("4star")}
                    >
                      4 Star
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        activeFilter === "3star"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setActiveFilter("3star")}
                    >
                      3 Star
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        activeFilter === "2star"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setActiveFilter("2star")}
                    >
                      2 Star
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        activeFilter === "1star"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setActiveFilter("1star")}
                    >
                      1 Star
                    </button>
                  </div>
                </div>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button className="flex items-center justify-between px-4 py-2 bg-white border border-[#ECECEC] rounded-md w-full md:w-48">
                  <span className="text-[#333333]">
                    Sort by:{" "}
                    {sortBy === "newest"
                      ? "Newest"
                      : sortBy === "oldest"
                      ? "Oldest"
                      : sortBy === "highest"
                      ? "Highest Rating"
                      : "Lowest Rating"}
                  </span>
                  <ChevronDown size={18} className="text-[#666666]" />
                </button>

                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#ECECEC] rounded-md shadow-lg z-10 hidden">
                  <div className="p-2">
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        sortBy === "newest"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setSortBy("newest")}
                    >
                      Newest
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        sortBy === "oldest"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setSortBy("oldest")}
                    >
                      Oldest
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        sortBy === "highest"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setSortBy("highest")}
                    >
                      Highest Rating
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        sortBy === "lowest"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setSortBy("lowest")}
                    >
                      Lowest Rating
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-white border border-[#ECECEC] rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mb-4 md:mb-0 md:mr-8">
                <h3 className="text-xl font-semibold text-[#333333] mb-2">
                  Sample Business Name
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={20}
                        fill={
                          star <= Math.round(averageRating) ? "#FFD700" : "none"
                        }
                        stroke={
                          star <= Math.round(averageRating)
                            ? "#FFD700"
                            : "#666666"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium text-[#333333]">
                    {formattedRating}
                  </span>
                  <span className="text-sm text-[#666666] ml-2">
                    ({reviews.length} reviews)
                  </span>
                </div>
                <p className="text-[#666666]">
                  123 Business Street, City, State
                </p>
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-[#ECECEC] rounded-md text-[#333333]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Directions
                </button>
                <button className="flex items-center px-4 py-2 border border-[#ECECEC] rounded-md text-[#333333]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call
                </button>
                <button className="flex items-center px-4 py-2 border border-[#ECECEC] rounded-md text-[#333333]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Message
                </button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden">
            <div className="border-b border-[#ECECEC] px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-[#333333]">
                  All Reviews ({sortedReviews.length})
                </h3>
                <div className="flex items-center">
                  <span className="text-sm text-[#666666] mr-2">Showing:</span>
                  <span className="text-sm font-medium text-[#333333]">
                    {activeFilter === "all"
                      ? "All Reviews"
                      : activeFilter === "5star"
                      ? "5 Star Reviews"
                      : activeFilter === "4star"
                      ? "4 Star Reviews"
                      : activeFilter === "3star"
                      ? "3 Star Reviews"
                      : activeFilter === "2star"
                      ? "2 Star Reviews"
                      : "1 Star Reviews"}
                  </span>
                </div>
              </div>
            </div>

            <div className="divide-y divide-[#ECECEC]">
              {sortedReviews.length > 0 ? (
                sortedReviews.map((review) => (
                  <div key={review.id} className="p-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-[#E6EEF4] flex items-center justify-center text-[#015594] font-medium mr-4">
                        {review.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="text-[#333333] font-medium">
                              {review.name}
                            </h4>
                            <div className="flex items-center">
                              <div className="flex mr-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    size={16}
                                    fill={
                                      star <= review.rating ? "#FFD700" : "none"
                                    }
                                    stroke={
                                      star <= review.rating
                                        ? "#FFD700"
                                        : "#666666"
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-[#666666]">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-[#333333]">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-[#666666]">
                    No reviews found matching your criteria.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="border-t border-[#ECECEC] px-6 py-4 flex items-center justify-between">
              <button
                className="px-4 py-2 border border-[#ECECEC] rounded-md text-[#666666] disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#015594] text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#666666]">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#666666]">
                  3
                </button>
              </div>
              <button className="px-4 py-2 border border-[#ECECEC] rounded-md text-[#666666]">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-[#ECECEC]">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button className="mr-4 text-[#333333]">
                <Menu size={24} />
              </button>
              <h1 className="text-lg font-medium text-[#333333]">Overview</h1>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm bg-[#015594] text-white rounded">
                  Dashboard
                </button>
                <button className="px-4 py-1 text-sm bg-white text-[#666666] rounded">
                  Calendar
                </button>
              </div>
              <div className="ml-4 w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white">
                <span>JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Back button and page title */}
          <div className="flex items-center mb-6">
            <button className="flex items-center text-[#015594]">
              <ArrowLeft size={18} className="mr-1" />
              <span>Back to Dashboard</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 md:mb-0">
              Business Photos
            </h2>

            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search photos"
                  className="pl-10 pr-4 py-2 border border-[#ECECEC] rounded-md w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]"
                />
              </div>

              {/* View mode toggle */}
              <div className="flex border border-[#ECECEC] rounded-md overflow-hidden">
                <button
                  className={`flex items-center justify-center px-4 py-2 ${
                    viewMode === "grid"
                      ? "bg-[#E6EEF4] text-[#015594]"
                      : "bg-white text-[#666666]"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={18} className="mr-2" />
                  Grid
                </button>
                <button
                  className={`flex items-center justify-center px-4 py-2 ${
                    viewMode === "list"
                      ? "bg-[#E6EEF4] text-[#015594]"
                      : "bg-white text-[#666666]"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={18} className="mr-2" />
                  List
                </button>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button className="flex items-center justify-between px-4 py-2 bg-white border border-[#ECECEC] rounded-md w-full md:w-48">
                  <span className="text-[#333333]">
                    Sort by:{" "}
                    {sortBy === "newest"
                      ? "Newest"
                      : sortBy === "oldest"
                      ? "Oldest"
                      : "Title"}
                  </span>
                  <ChevronDown size={18} className="text-[#666666]" />
                </button>

                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#ECECEC] rounded-md shadow-lg z-10 hidden">
                  <div className="p-2">
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        sortBy === "newest"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setSortBy("newest")}
                    >
                      Newest
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        sortBy === "oldest"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setSortBy("oldest")}
                    >
                      Oldest
                    </button>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        sortBy === "title"
                          ? "bg-[#E6EEF4] text-[#015594]"
                          : "text-[#333333]"
                      }`}
                      onClick={() => setSortBy("title")}
                    >
                      Title
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photos Section */}
          <div className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden">
            <div className="border-b border-[#ECECEC] px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-[#333333]">
                  All Photos ({sortedPhotos.length})
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center text-[#015594]">
                    <Download size={18} className="mr-1" />
                    <span className="hidden sm:inline">Download All</span>
                  </button>
                  <button className="flex items-center text-[#015594]">
                    <Share2 size={18} className="mr-1" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>
            </div>

            {sortedPhotos.length > 0 ? (
              viewMode === "grid" ? (
                <div className="p-6">
                  {/* First row - 2 images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {sortedPhotos.slice(0, 2).map((photo) => (
                      <div
                        key={photo.id}
                        className="group relative rounded-lg overflow-hidden border border-[#ECECEC] hover:shadow-md transition-shadow h-64"
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="flex space-x-2">
                            <button className="p-2 bg-white rounded-full text-[#333333]">
                              <Download size={18} />
                            </button>
                            <button className="p-2 bg-white rounded-full text-[#333333]">
                              <Share2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Second row - 3 images */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {sortedPhotos.slice(2, 5).map((photo) => (
                      <div
                        key={photo.id}
                        className="group relative rounded-lg overflow-hidden border border-[#ECECEC] hover:shadow-md transition-shadow h-48"
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="flex space-x-2">
                            <button className="p-2 bg-white rounded-full text-[#333333]">
                              <Download size={18} />
                            </button>
                            <button className="p-2 bg-white rounded-full text-[#333333]">
                              <Share2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Third row - 2 images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sortedPhotos.slice(5, 7).map((photo) => (
                      <div
                        key={photo.id}
                        className="group relative rounded-lg overflow-hidden border border-[#ECECEC] hover:shadow-md transition-shadow h-64"
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="flex space-x-2">
                            <button className="p-2 bg-white rounded-full text-[#333333]">
                              <Download size={18} />
                            </button>
                            <button className="p-2 bg-white rounded-full text-[#333333]">
                              <Share2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Remaining images in a grid */}
                  {sortedPhotos.length > 7 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {sortedPhotos.slice(7).map((photo) => (
                        <div
                          key={photo.id}
                          className="group relative rounded-lg overflow-hidden border border-[#ECECEC] hover:shadow-md transition-shadow h-48"
                        >
                          <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="flex space-x-2">
                              <button className="p-2 bg-white rounded-full text-[#333333]">
                                <Download size={18} />
                              </button>
                              <button className="p-2 bg-white rounded-full text-[#333333]">
                                <Share2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="divide-y divide-[#ECECEC]">
                  {sortedPhotos.map((photo) => (
                    <div key={photo.id} className="p-4 flex items-center">
                      <div className="w-20 h-20 rounded-md overflow-hidden mr-4">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#333333]">
                          {photo.title}
                        </h4>
                        <p className="text-sm text-[#666666]">{photo.date}</p>
                        <p className="text-sm text-[#666666] capitalize">
                          {photo.category}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-[#666666] hover:text-[#015594]">
                          <Download size={18} />
                        </button>
                        <button className="p-2 text-[#666666] hover:text-[#015594]">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="p-6 text-center">
                <p className="text-[#666666]">
                  No photos found matching your search.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="border-t border-[#ECECEC] px-6 py-4 flex items-center justify-between">
              <button
                className="px-4 py-2 border border-[#ECECEC] rounded-md text-[#666666] disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#015594] text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#666666]">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#666666]">
                  3
                </button>
              </div>
              <button className="px-4 py-2 border border-[#ECECEC] rounded-md text-[#666666]">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-[#ECECEC]">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button className="mr-4 text-[#333333]">
                <Menu size={24} />
              </button>
              <h1 className="text-lg font-medium text-[#333333]">Overview</h1>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm bg-[#015594] text-white rounded">
                  Dashboard
                </button>
                <button className="px-4 py-1 text-sm bg-white text-[#666666] rounded">
                  Calendar
                </button>
              </div>
              <div className="ml-4 w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white">
                <span>JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Back button and page title */}
          <div className="flex items-center mb-6">
            <button className="flex items-center text-[#015594]">
              <ArrowLeft size={18} className="mr-1" />
              <span>Back to Dashboard</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 md:mb-0">
              Business Documents
            </h2>

            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documents"
                  className="pl-10 pr-4 py-2 border border-[#ECECEC] rounded-md w-full md:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]"
                />
              </div>

              {/* View mode toggle */}
              <div className="flex border border-[#ECECEC] rounded-md overflow-hidden">
                <button
                  className={`flex items-center justify-center px-4 py-2 ${
                    viewMode === "grid"
                      ? "bg-[#E6EEF4] text-[#015594]"
                      : "bg-white text-[#666666]"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={18} className="mr-2" />
                  Grid
                </button>
                <button
                  className={`flex items-center justify-center px-4 py-2 ${
                    viewMode === "list"
                      ? "bg-[#E6EEF4] text-[#015594]"
                      : "bg-white text-[#666666]"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={18} className="mr-2" />
                  List
                </button>
              </div>

              {/* Filter dropdown */}
              <div className="relative">
                <button
                  className="flex items-center justify-between px-4 py-2 bg-white border border-[#ECECEC] rounded-md w-full md:w-48"
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                >
                  <span className="text-[#333333]">
                    Filter:{" "}
                    {filterCategory === "all"
                      ? "All"
                      : filterCategory.charAt(0).toUpperCase() +
                        filterCategory.slice(1)}
                  </span>
                  <Filter size={18} className="text-[#666666]" />
                </button>

                {showFilterDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#ECECEC] rounded-md shadow-lg z-10">
                    <div className="p-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={`block w-full text-left px-3 py-2 rounded-md ${
                            filterCategory === category
                              ? "bg-[#E6EEF4] text-[#015594]"
                              : "text-[#333333]"
                          }`}
                          onClick={() => {
                            setFilterCategory(category);
                            setShowFilterDropdown(false);
                          }}
                        >
                          {category === "all"
                            ? "All"
                            : category.charAt(0).toUpperCase() +
                              category.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  className="flex items-center justify-between px-4 py-2 bg-white border border-[#ECECEC] rounded-md w-full md:w-48"
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                >
                  <span className="text-[#333333]">
                    Sort by:{" "}
                    {sortBy === "newest"
                      ? "Newest"
                      : sortBy === "oldest"
                      ? "Oldest"
                      : sortBy === "title"
                      ? "Title"
                      : "Size"}
                  </span>
                  <ChevronDown size={18} className="text-[#666666]" />
                </button>

                {showSortDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#ECECEC] rounded-md shadow-lg z-10">
                    <div className="p-2">
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          sortBy === "newest"
                            ? "bg-[#E6EEF4] text-[#015594]"
                            : "text-[#333333]"
                        }`}
                        onClick={() => {
                          setSortBy("newest");
                          setShowSortDropdown(false);
                        }}
                      >
                        Newest
                      </button>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          sortBy === "oldest"
                            ? "bg-[#E6EEF4] text-[#015594]"
                            : "text-[#333333]"
                        }`}
                        onClick={() => {
                          setSortBy("oldest");
                          setShowSortDropdown(false);
                        }}
                      >
                        Oldest
                      </button>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          sortBy === "title"
                            ? "bg-[#E6EEF4] text-[#015594]"
                            : "text-[#333333]"
                        }`}
                        onClick={() => {
                          setSortBy("title");
                          setShowSortDropdown(false);
                        }}
                      >
                        Title
                      </button>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          sortBy === "size"
                            ? "bg-[#E6EEF4] text-[#015594]"
                            : "text-[#333333]"
                        }`}
                        onClick={() => {
                          setSortBy("size");
                          setShowSortDropdown(false);
                        }}
                      >
                        Size
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Upload Button */}
          <div className="mb-6">
            <button className="flex items-center px-4 py-2 bg-[#015594] text-white rounded-md">
              <Upload size={18} className="mr-2" />
              Upload Document
            </button>
          </div>

          {/* Documents Section */}
          <div className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden">
            <div className="border-b border-[#ECECEC] px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-[#333333]">
                  All Documents ({sortedDocuments.length})
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center text-[#015594]">
                    <Download size={18} className="mr-1" />
                    <span className="hidden sm:inline">Download All</span>
                  </button>
                  <button className="flex items-center text-[#015594]">
                    <Share2 size={18} className="mr-1" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>
            </div>

            {sortedDocuments.length > 0 ? (
              viewMode === "grid" ? (
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sortedDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="group relative bg-white border border-[#ECECEC] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center">
                            {doc.type === "pdf" ? (
                              <div className="w-10 h-12 bg-red-100 flex items-center justify-center rounded">
                                <span className="text-xs font-bold text-red-500">
                                  PDF
                                </span>
                              </div>
                            ) : doc.type === "docx" ? (
                              <div className="w-10 h-12 bg-blue-100 flex items-center justify-center rounded">
                                <span className="text-xs font-bold text-blue-500">
                                  DOC
                                </span>
                              </div>
                            ) : doc.type === "xlsx" ? (
                              <div className="w-10 h-12 bg-green-100 flex items-center justify-center rounded">
                                <span className="text-xs font-bold text-green-500">
                                  XLS
                                </span>
                              </div>
                            ) : doc.type === "pptx" ? (
                              <div className="w-10 h-12 bg-orange-100 flex items-center justify-center rounded">
                                <span className="text-xs font-bold text-orange-500">
                                  PPT
                                </span>
                              </div>
                            ) : (
                              <div className="w-10 h-12 bg-gray-100 flex items-center justify-center rounded">
                                <span className="text-xs font-bold text-gray-500">
                                  FILE
                                </span>
                              </div>
                            )}
                            {doc.starred && (
                              <Star
                                size={16}
                                className="text-yellow-400 ml-2"
                                fill="currentColor"
                              />
                            )}
                          </div>
                          <button className="text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronDown size={18} />
                          </button>
                        </div>
                        <h4 className="font-medium text-[#333333] mb-1 line-clamp-2">
                          {doc.title}
                        </h4>
                        <div className="flex items-center text-xs text-[#666666] mb-2">
                          <span className="capitalize">{doc.category}</span>
                          <span className="mx-1">•</span>
                          <span>{doc.size}</span>
                        </div>
                        <div className="flex items-center text-xs text-[#666666]">
                          <Clock size={14} className="mr-1" />
                          <span>{doc.date}</span>
                        </div>
                      </div>
                      <div className="border-t border-[#ECECEC] p-2 flex justify-between">
                        <button className="p-2 text-[#666666] hover:text-[#015594] transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-[#666666] hover:text-[#015594] transition-colors">
                          <Download size={16} />
                        </button>
                        <button className="p-2 text-[#666666] hover:text-[#015594] transition-colors">
                          <Share2 size={16} />
                        </button>
                        <button className="p-2 text-[#666666] hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-[#ECECEC]">
                  {sortedDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 flex items-center hover:bg-[#FCFCFC]"
                    >
                      <div className="mr-4">
                        {doc.type === "pdf" ? (
                          <div className="w-10 h-12 bg-red-100 flex items-center justify-center rounded">
                            <span className="text-xs font-bold text-red-500">
                              PDF
                            </span>
                          </div>
                        ) : doc.type === "docx" ? (
                          <div className="w-10 h-12 bg-blue-100 flex items-center justify-center rounded">
                            <span className="text-xs font-bold text-blue-500">
                              DOC
                            </span>
                          </div>
                        ) : doc.type === "xlsx" ? (
                          <div className="w-10 h-12 bg-green-100 flex items-center justify-center rounded">
                            <span className="text-xs font-bold text-green-500">
                              XLS
                            </span>
                          </div>
                        ) : doc.type === "pptx" ? (
                          <div className="w-10 h-12 bg-orange-100 flex items-center justify-center rounded">
                            <span className="text-xs font-bold text-orange-500">
                              PPT
                            </span>
                          </div>
                        ) : (
                          <div className="w-10 h-12 bg-gray-100 flex items-center justify-center rounded">
                            <span className="text-xs font-bold text-gray-500">
                              FILE
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="font-medium text-[#333333]">
                            {doc.title}
                          </h4>
                          {doc.starred && (
                            <Star
                              size={16}
                              className="text-yellow-400 ml-2"
                              fill="currentColor"
                            />
                          )}
                        </div>
                        <div className="flex items-center text-sm text-[#666666]">
                          <span className="capitalize">{doc.category}</span>
                          <span className="mx-1">•</span>
                          <span>{doc.size}</span>
                          <span className="mx-1">•</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-[#666666] hover:text-[#015594] transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-[#666666] hover:text-[#015594] transition-colors">
                          <Download size={18} />
                        </button>
                        <button className="p-2 text-[#666666] hover:text-[#015594] transition-colors">
                          <Share2 size={18} />
                        </button>
                        <button className="p-2 text-[#666666] hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="p-6 text-center">
                <p className="text-[#666666]">
                  No documents found matching your search.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="border-t border-[#ECECEC] px-6 py-4 flex items-center justify-between">
              <button
                className="px-4 py-2 border border-[#ECECEC] rounded-md text-[#666666] disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#015594] text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#666666]">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#666666]">
                  3
                </button>
              </div>
              <button className="px-4 py-2 border border-[#ECECEC] rounded-md text-[#666666]">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-[#ECECEC]">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button className="mr-4 text-[#333333]">
                <Menu size={24} />
              </button>
              <h1 className="text-lg font-medium text-[#333333]">Overview</h1>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm bg-[#015594] text-white rounded">
                  Dashboard
                </button>
                <button className="px-4 py-1 text-sm bg-white text-[#666666] rounded">
                  Calendar
                </button>
              </div>
              <div className="ml-4 w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white">
                <span>JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Back button and page title */}
          <div className="flex items-center mb-6">
            <button className="flex items-center text-[#015594]">
              <ArrowLeft size={18} className="mr-1" />
              <span>Back to Documents</span>
            </button>
          </div>

          {/* Document Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-start mb-4 md:mb-0">
              <div className="mr-4">
                <div className="w-12 h-14 bg-red-100 flex items-center justify-center rounded">
                  <span className="text-xs font-bold text-red-500">PDF</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <h2 className="text-2xl font-semibold text-[#333333]">
                    {document.title}
                  </h2>
                  {document.starred && (
                    <Star
                      size={20}
                      className="text-yellow-400 ml-2"
                      fill="currentColor"
                    />
                  )}
                </div>
                <div className="flex items-center text-sm text-[#666666] mt-1">
                  <span className="capitalize">{document.category}</span>
                  <span className="mx-1">•</span>
                  <span>{document.size}</span>
                  <span className="mx-1">•</span>
                  <span>Last modified: {document.lastModified}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]">
                <Printer size={18} className="mr-2" />
                <span>Print</span>
              </button>
              <button className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]">
                <Download size={18} className="mr-2" />
                <span>Download</span>
              </button>
              <div className="relative">
                <button
                  className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]"
                  onClick={() => setShowShareOptions(!showShareOptions)}
                >
                  <Share2 size={18} className="mr-2" />
                  <span>Share</span>
                </button>

                {showShareOptions && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-[#ECECEC] rounded-md shadow-lg z-10">
                    <div className="p-3">
                      <h4 className="font-medium text-[#333333] mb-2">
                        Share Document
                      </h4>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-[#ECECEC] rounded-md text-sm"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-[#666666]">
                          Allow editing
                        </span>
                        <div className="w-10 h-5 bg-[#ECECEC] rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button className="w-full px-3 py-2 bg-[#015594] text-white rounded-md text-sm">
                          Share
                        </button>
                      </div>
                      <div className="pt-2 border-t border-[#ECECEC]">
                        <button className="flex items-center w-full px-2 py-1.5 text-sm text-[#333333] hover:bg-[#FCFCFC] rounded">
                          <Copy size={16} className="mr-2 text-[#666666]" />
                          <span>Copy link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]">
                <Edit size={18} className="mr-2" />
                <span>Edit</span>
              </button>
              <button className="flex items-center px-3 py-2 bg-[#015594] text-white rounded-md hover:bg-[#014a80]">
                <ExternalLink size={18} className="mr-2" />
                <span>Open</span>
              </button>
            </div>
          </div>

          {/* Document View and Sidebar */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Document View */}
            <div className="lg:w-3/4">
              <div className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden mb-6">
                {/* View Mode Tabs */}
                <div className="border-b border-[#ECECEC] px-4">
                  <div className="flex">
                    <button
                      className={`px-4 py-3 font-medium ${
                        docviewMode === "document"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => docsetViewMode("document")}
                    >
                      Document
                    </button>
                    <button
                      className={`px-4 py-3 font-medium ${
                        docviewMode === "comments"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => docsetViewMode("comments")}
                    >
                      Comments ({document.comments.length})
                    </button>
                  </div>
                </div>

                {/* Document Content */}
                <div>
                  {docviewMode === "document" ? (
                    renderDocumentPreview()
                  ) : (
                    <div className="p-6">
                      <div className="mb-6">
                        <div className="flex items-start mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white mr-3">
                            <span>JD</span>
                          </div>
                          <div className="flex-1">
                            <textarea
                              className="w-full px-3 py-2 border border-[#ECECEC] rounded-md"
                              placeholder="Add a comment..."
                              rows={3}
                            ></textarea>
                            <div className="mt-2 flex justify-end">
                              <button className="px-4 py-2 bg-[#015594] text-white rounded-md">
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {document.comments.map((comment) => (
                          <div key={comment.id} className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white mr-3">
                              <span>
                                {comment.user
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <span className="font-medium text-[#333333]">
                                  {comment.user}
                                </span>
                                <span className="mx-2 text-[#666666]">•</span>
                                <span className="text-sm text-[#666666]">
                                  {comment.date}
                                </span>
                              </div>
                              <p className="text-[#333333]">{comment.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden mb-6">
                <div className="border-b border-[#ECECEC] px-4">
                  <div className="flex">
                    <button
                      className={`px-4 py-3 text-sm font-medium ${
                        activeTab === "details"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => setActiveTab("details")}
                    >
                      Details
                    </button>
                    <button
                      className={`px-4 py-3 text-sm font-medium ${
                        activeTab === "activity"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => setActiveTab("activity")}
                    >
                      Activity
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  {activeTab === "details" ? (
                    <div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-[#666666] mb-1">
                          Description
                        </h4>
                        <p className="text-sm text-[#333333]">
                          {document.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Created by
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.createdBy}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Date created
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.date}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Last modified
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.lastModified}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Version
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.version}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Status
                          </h4>
                          <div className="flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-sm text-[#333333]">
                              {document.status}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Expiry date
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.expiryDate}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Tags
                          </h4>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {document.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#E6EEF4] text-[#015594] text-xs rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-[#666666] mb-2">
                          Related documents
                        </h4>
                        <div className="space-y-2">
                          {document.relatedDocuments.map((doc) => (
                            <div
                              key={doc.id}
                              className="flex items-center p-2 hover:bg-[#FCFCFC] rounded-md"
                            >
                              <div className="mr-3">
                                {doc.type === "pdf" ? (
                                  <div className="w-8 h-10 bg-red-100 flex items-center justify-center rounded">
                                    <span className="text-xs font-bold text-red-500">
                                      PDF
                                    </span>
                                  </div>
                                ) : doc.type === "docx" ? (
                                  <div className="w-8 h-10 bg-blue-100 flex items-center justify-center rounded">
                                    <span className="text-xs font-bold text-blue-500">
                                      DOC
                                    </span>
                                  </div>
                                ) : (
                                  <div className="w-8 h-10 bg-gray-100 flex items-center justify-center rounded">
                                    <span className="text-xs font-bold text-gray-500">
                                      FILE
                                    </span>
                                  </div>
                                )}
                              </div>
                              <span className="text-sm text-[#333333]">
                                {doc.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {document.history.map((item) => (
                        <div key={item.id} className="flex items-start">
                          <div className="mr-3">
                            {item.action === "Created" ? (
                              <FileText size={16} className="text-[#015594]" />
                            ) : item.action === "Viewed" ? (
                              <Eye size={16} className="text-[#015594]" />
                            ) : item.action === "Commented" ? (
                              <MessageSquare
                                size={16}
                                className="text-[#015594]"
                              />
                            ) : item.action === "Modified" ? (
                              <Edit size={16} className="text-[#015594]" />
                            ) : (
                              <History size={16} className="text-[#015594]" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <span className="text-sm font-medium text-[#333333]">
                                {item.user}
                              </span>
                              <span className="mx-2 text-xs text-[#666666]">
                                •
                              </span>
                              <span className="text-xs text-[#666666]">
                                {item.date}
                              </span>
                            </div>
                            <p className="text-sm text-[#333333]">
                              {item.action} the document
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-[#ECECEC]">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button className="mr-4 text-[#333333]">
                <Menu size={24} />
              </button>
              <h1 className="text-lg font-medium text-[#333333]">Overview</h1>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm bg-[#015594] text-white rounded">
                  Dashboard
                </button>
                <button className="px-4 py-1 text-sm bg-white text-[#666666] rounded">
                  Calendar
                </button>
              </div>
              <div className="ml-4 w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white">
                <span>JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Back button and page title */}
          <div className="flex items-center mb-6">
            <button className="flex items-center text-[#015594]">
              <ArrowLeft size={18} className="mr-1" />
              <span>Back to Documents</span>
            </button>
          </div>

          {/* Document Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-start mb-4 md:mb-0">
              <div className="mr-4">
                <div className="w-12 h-14 bg-red-100 flex items-center justify-center rounded">
                  <span className="text-xs font-bold text-red-500">PDF</span>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <h2 className="text-2xl font-semibold text-[#333333]">
                    {document.title}
                  </h2>
                  {document.starred && (
                    <Star
                      size={20}
                      className="text-yellow-400 ml-2"
                      fill="currentColor"
                    />
                  )}
                </div>
                <div className="flex items-center text-sm text-[#666666] mt-1">
                  <span className="capitalize">{document.category}</span>
                  <span className="mx-1">•</span>
                  <span>{document.size}</span>
                  <span className="mx-1">•</span>
                  <span>Last modified: {document.lastModified}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]">
                <Printer size={18} className="mr-2" />
                <span>Print</span>
              </button>
              <button className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]">
                <Download size={18} className="mr-2" />
                <span>Download</span>
              </button>
              <div className="relative">
                <button
                  className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]"
                  onClick={() => setShowShareOptions(!showShareOptions)}
                >
                  <Share2 size={18} className="mr-2" />
                  <span>Share</span>
                </button>

                {showShareOptions && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-[#ECECEC] rounded-md shadow-lg z-10">
                    <div className="p-3">
                      <h4 className="font-medium text-[#333333] mb-2">
                        Share Document
                      </h4>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-[#ECECEC] rounded-md text-sm"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-[#666666]">
                          Allow editing
                        </span>
                        <div className="w-10 h-5 bg-[#ECECEC] rounded-full relative">
                          <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button className="w-full px-3 py-2 bg-[#015594] text-white rounded-md text-sm">
                          Share
                        </button>
                      </div>
                      <div className="pt-2 border-t border-[#ECECEC]">
                        <button className="flex items-center w-full px-2 py-1.5 text-sm text-[#333333] hover:bg-[#FCFCFC] rounded">
                          <Copy size={16} className="mr-2 text-[#666666]" />
                          <span>Copy link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="flex items-center px-3 py-2 bg-white border border-[#ECECEC] rounded-md text-[#333333] hover:bg-[#FCFCFC]">
                <Edit size={18} className="mr-2" />
                <span>Edit</span>
              </button>
              <button className="flex items-center px-3 py-2 bg-[#015594] text-white rounded-md hover:bg-[#014a80]">
                <ExternalLink size={18} className="mr-2" />
                <span>Open</span>
              </button>
            </div>
          </div>

          {/* Document View and Sidebar */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Document View */}
            <div className="lg:w-3/4">
              <div className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden mb-6">
                {/* View Mode Tabs */}
                <div className="border-b border-[#ECECEC] px-4">
                  <div className="flex">
                    <button
                      className={`px-4 py-3 font-medium ${
                        twodocviewMode === "document"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => twodocsetViewMode("document")}
                    >
                      Document
                    </button>
                    <button
                      className={`px-4 py-3 font-medium ${
                        twodocviewMode === "comments"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => twodocsetViewMode("comments")}
                    >
                      Comments ({document.comments.length})
                    </button>
                  </div>
                </div>

                {/* Document Content */}
                <div>
                  {twodocviewMode === "document" ? (
                    renderDocumentPreview()
                  ) : (
                    <div className="p-6">
                      <div className="mb-6">
                        <div className="flex items-start mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white mr-3">
                            <span>JD</span>
                          </div>
                          <div className="flex-1">
                            <textarea
                              className="w-full px-3 py-2 border border-[#ECECEC] rounded-md"
                              placeholder="Add a comment..."
                              rows={3}
                            ></textarea>
                            <div className="mt-2 flex justify-end">
                              <button className="px-4 py-2 bg-[#015594] text-white rounded-md">
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {document.comments.map((comment) => (
                          <div key={comment.id} className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-[#015594] flex items-center justify-center text-white mr-3">
                              <span>
                                {comment.user
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <span className="font-medium text-[#333333]">
                                  {comment.user}
                                </span>
                                <span className="mx-2 text-[#666666]">•</span>
                                <span className="text-sm text-[#666666]">
                                  {comment.date}
                                </span>
                              </div>
                              <p className="text-[#333333]">{comment.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden mb-6">
                <div className="border-b border-[#ECECEC] px-4">
                  <div className="flex">
                    <button
                      className={`px-4 py-3 text-sm font-medium ${
                        twoactiveTab === "details"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => settwoActiveTab("details")}
                    >
                      Details
                    </button>
                    <button
                      className={`px-4 py-3 text-sm font-medium ${
                        twoactiveTab === "activity"
                          ? "text-[#015594] border-b-2 border-[#015594]"
                          : "text-[#666666]"
                      }`}
                      onClick={() => settwoActiveTab("activity")}
                    >
                      Activity
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  {twoactiveTab === "details" ? (
                    <div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-[#666666] mb-1">
                          Description
                        </h4>
                        <p className="text-sm text-[#333333]">
                          {document.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Created by
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.createdBy}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Date created
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.date}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Last modified
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.lastModified}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Version
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.version}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Status
                          </h4>
                          <div className="flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-sm text-[#333333]">
                              {document.status}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Expiry date
                          </h4>
                          <p className="text-sm text-[#333333]">
                            {document.expiryDate}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#666666] mb-1">
                            Tags
                          </h4>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {document.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#E6EEF4] text-[#015594] text-xs rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-[#666666] mb-2">
                          Related documents
                        </h4>
                        <div className="space-y-2">
                          {document.relatedDocuments.map((doc) => (
                            <div
                              key={doc.id}
                              className="flex items-center p-2 hover:bg-[#FCFCFC] rounded-md"
                            >
                              <div className="mr-3">
                                {doc.type === "pdf" ? (
                                  <div className="w-8 h-10 bg-red-100 flex items-center justify-center rounded">
                                    <span className="text-xs font-bold text-red-500">
                                      PDF
                                    </span>
                                  </div>
                                ) : doc.type === "docx" ? (
                                  <div className="w-8 h-10 bg-blue-100 flex items-center justify-center rounded">
                                    <span className="text-xs font-bold text-blue-500">
                                      DOC
                                    </span>
                                  </div>
                                ) : (
                                  <div className="w-8 h-10 bg-gray-100 flex items-center justify-center rounded">
                                    <span className="text-xs font-bold text-gray-500">
                                      FILE
                                    </span>
                                  </div>
                                )}
                              </div>
                              <span className="text-sm text-[#333333]">
                                {doc.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {document.history.map((item) => (
                        <div key={item.id} className="flex items-start">
                          <div className="mr-3">
                            {item.action === "Created" ? (
                              <FileText size={16} className="text-[#015594]" />
                            ) : item.action === "Viewed" ? (
                              <Eye size={16} className="text-[#015594]" />
                            ) : item.action === "Commented" ? (
                              <MessageSquare
                                size={16}
                                className="text-[#015594]"
                              />
                            ) : item.action === "Modified" ? (
                              <Edit size={16} className="text-[#015594]" />
                            ) : (
                              <History size={16} className="text-[#015594]" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <span className="text-sm font-medium text-[#333333]">
                                {item.user}
                              </span>
                              <span className="mx-2 text-xs text-[#666666]">
                                •
                              </span>
                              <span className="text-xs text-[#666666]">
                                {item.date}
                              </span>
                            </div>
                            <p className="text-sm text-[#333333]">
                              {item.action} the document
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-[#ECECEC] px-6 py-4 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div className="text-[#015594] font-bold text-2xl mr-1">
                  WIZ
                </div>
                <div className="text-[#333333] font-medium">niche</div>
              </div>
              <div className="h-6 w-px bg-[#ECECEC]"></div>
              <div className="text-[#333333] font-medium text-lg">Hub</div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center text-[#666666]">
                <CloudSun size={18} className="text-[#015594] mr-2" />
                Kansas City | 75°
              </div>
              <div className="flex items-center text-[#666666]">
                <CalendarClock size={18} className="text-[#015594] mr-2" />
                Monday, July 8th | 3:00 PM
              </div>
              <div className="relative">
                <Bell size={20} className="text-[#666666]" />
                <span className="absolute -top-1 -right-1 bg-[#015594] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=40&h=40&auto=format&fit=crop"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Business Selector */}
            <div className="mb-8 bg-white p-5 rounded-lg shadow-sm border border-[#ECECEC]">
              <div className="flex items-center mb-4">
                <h2 className="text-[#333333] font-medium text-lg">
                  Select a Business
                </h2>
                <div className="relative ml-4">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]"
                  />
                  <input
                    type="text"
                    placeholder="Search businesses..."
                    className="pl-10 pr-4 py-2 border border-[#ECECEC] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 w-64"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {businesses.map((business) => (
                    <div
                      key={business.id}
                      onClick={() => setSelectedBusiness(business.name)}
                      className={`flex-shrink-0 flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all w-36 ${
                        selectedBusiness === business.name
                          ? "bg-gray-100 border-gray-300 border shadow-sm"
                          : "bg-white border border-[#ECECEC] hover:bg-[#FCFCFC]"
                      }`}
                    >
                      <img
                        src={business.logo}
                        alt={business.name}
                        className="w-12 h-12 rounded-full mb-2 object-cover"
                      />
                      <span className="text-sm font-medium text-center text-[#333333]">
                        {business.name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Scroll indicator */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <div className="h-1 w-20 bg-gray-300 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#333333] font-semibold text-xl">
                  Important actions
                </h2>

                {/* Business dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center bg-white border border-[#ECECEC] rounded-lg px-4 py-2 text-[#333333] font-medium text-sm hover:bg-gray-50"
                  >
                    <span>Select Business</span>
                    <ChevronDown size={16} className="ml-2" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-[#ECECEC] rounded-lg shadow-lg z-10">
                      <div className="p-2">
                        <div className="relative mb-2">
                          <Search
                            size={16}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#666666]"
                          />
                          <input
                            type="text"
                            placeholder="Search businesses..."
                            className="pl-8 pr-4 py-2 border border-[#ECECEC] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          {filteredBusinesses.map((business) => (
                            <div
                              key={business.id}
                              onClick={() => {
                                setSelectedBusiness(business.name);
                                setDropdownOpen(false);
                              }}
                              className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                              <img
                                src={business.logo}
                                alt={business.name}
                                className="w-8 h-8 rounded-full mr-2 object-cover"
                              />
                              <span className="text-sm text-[#333333]">
                                {business.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Invoices Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CreditCard size={18} className="text-gray-500 mr-2" />
                    <h3 className="text-[#333333] font-medium">
                      PENDING INVOICES
                    </h3>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-md">
                    <span className="text-sm font-medium text-gray-700">
                      Total: {calculateTotalInvoices()}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {invoices.map((invoice, index) => (
                      <div
                        key={index}
                        className="border border-[#ECECEC] rounded-lg p-4 bg-white hover:shadow-sm transition-shadow flex-shrink-0 w-80"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="mr-3 h-4 w-4 rounded border-gray-300 text-gray-500 focus:ring-gray-400"
                            />
                            <div>
                              <span className="text-[#333333] font-medium">
                                {invoice.id}
                              </span>
                              <span className="text-[#666666] text-sm ml-3">
                                {invoice.type}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                            Open
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-[#666666] mb-1">
                              Total Amount
                            </p>
                            <p className="text-[#333333] font-medium">
                              {invoice.amount}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-[#666666] mb-1">
                              Applied payment
                            </p>
                            <p className="text-[#333333] font-medium">
                              {invoice.amount}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-[#666666] mb-1">
                              Due Date
                            </p>
                            <p className="text-[#333333]">{invoice.dueDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-[#666666] mb-1">
                              Date Paid
                            </p>
                            <p className="text-[#333333]">
                              {invoice.paymentDate}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <button className="flex items-center text-[#666666] text-sm hover:text-gray-800">
                            <Eye size={16} className="mr-1" />
                            Preview
                          </button>
                          <button className="flex items-center text-[#666666] text-sm hover:text-gray-800">
                            <Download size={16} className="mr-1" />
                            Download
                          </button>
                          <button className="bg-[#015594] text-white px-4 py-1.5 rounded-md text-sm flex items-center hover:bg-[#014a80]">
                            <CheckCircle size={14} className="mr-1" />
                            Pay
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Scroll indicator */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <div className="h-1 w-20 bg-gray-300 rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Appointments Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileText size={18} className="text-gray-500 mr-2" />
                    <h3 className="text-[#333333] font-medium">
                      UPCOMING APPOINTMENTS
                    </h3>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-md">
                    <span className="text-sm font-medium text-gray-700">
                      Total: {appointments.length} appointments
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {appointments.map((appointment, index) => (
                      <div
                        key={index}
                        className="border border-[#ECECEC] rounded-lg p-4 bg-white hover:shadow-sm transition-shadow flex-shrink-0 w-80"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="mr-3 h-4 w-4 rounded border-gray-300 text-gray-500 focus:ring-gray-400"
                            />
                            <div>
                              <span className="text-[#333333] font-medium">
                                {appointment.date}
                              </span>
                              <span className="text-[#666666] text-sm ml-3">
                                {appointment.time}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                            Scheduled
                          </span>
                        </div>

                        <div className="mb-4">
                          <p className="text-[#333333] font-medium mb-1">
                            Service Name
                          </p>
                          <p className="text-[#666666] text-sm mb-3">
                            {appointment.id}
                          </p>
                          <div className="flex items-center text-[#666666] text-sm mb-4">
                            <MapPin
                              size={16}
                              className="mr-1 flex-shrink-0 text-gray-500"
                            />
                            <span className="truncate">
                              {appointment.address}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <img
                              src={appointment.technician.avatar}
                              alt={appointment.technician.name}
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <div>
                              <p className="text-[#333333] text-sm font-medium">
                                {appointment.technician.name}
                              </p>
                              <p className="text-[#666666] text-xs">
                                Technician
                              </p>
                            </div>
                          </div>
                          <button className="border border-gray-300 text-gray-700 px-4 py-1.5 rounded-md text-sm hover:bg-gray-50">
                            Add to calendar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Scroll indicator */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <div className="h-1 w-20 bg-gray-300 rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Jobs Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Briefcase size={18} className="text-gray-500 mr-2" />
                    <h3 className="text-[#333333] font-medium">
                      UPCOMING JOBS
                    </h3>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-md">
                    <span className="text-sm font-medium text-gray-700">
                      Total: {calculateTotalJobs()}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {jobs.map((job, index) => (
                      <div
                        key={index}
                        className="border border-[#ECECEC] rounded-lg p-4 bg-white hover:shadow-sm transition-shadow flex-shrink-0 w-80"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-[#333333] font-medium">
                              {job.date}
                            </span>
                          </div>
                          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                            Scheduled
                          </span>
                        </div>

                        <div className="mb-4">
                          <p className="text-[#333333] font-medium mb-1">
                            Service Name
                          </p>
                          <div className="flex items-center text-[#666666] text-sm mb-3">
                            <MapPin
                              size={16}
                              className="mr-1 flex-shrink-0 text-gray-500"
                            />
                            <span className="truncate">{job.address}</span>
                          </div>
                          <div className="flex items-center text-[#666666] text-sm">
                            <Clock size={16} className="mr-1 text-gray-500" />
                            <span>{job.time}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold mr-2">
                              VG
                            </div>
                            <p className="text-[#333333] text-sm">
                              {job.technician}
                            </p>
                          </div>
                          <p className="font-medium text-[#333333]">
                            {job.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Scroll indicator */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <div className="h-1 w-20 bg-gray-300 rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Referrals Sidebar */}
          <div className="w-80 bg-[#FCFCFC] border-l border-[#ECECEC] p-6">
            <h2 className="text-[#333333] font-semibold text-xl mb-6">
              Referrals
            </h2>

            <div>
              <div className="bg-white rounded-lg border border-[#ECECEC] p-4 hover:shadow-sm transition-shadow">
                <div className="mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-3">
                    <Users size={20} />
                  </div>
                  <h3 className="text-[#333333] font-medium">
                    Refer a Business
                  </h3>
                </div>

                <p className="text-[#666666] text-sm mb-4">
                  Earn $500 for each business you refer that joins our platform
                </p>

                <button className="bg-[#015594] text-white w-full py-2 rounded-md text-sm font-medium hover:bg-[#014a80]">
                  Share Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
