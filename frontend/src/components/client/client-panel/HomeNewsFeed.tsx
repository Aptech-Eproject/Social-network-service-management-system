"use client";

import { useState } from "react";

import {
    Heart,
    MessageCircle,
    Share2,
    TrendingUp
} from "lucide-react";

interface BlogPost {
    id: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    title: string;
    description: string;
    category: string;
    createdAt: string;
    likes: number;
    comments: number;
    isLiked: boolean;
    badge?: "trending" | "new";
}

const MOCK_BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        author: {
            name: "Admin",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
            role: "Administrator",
        },
        title: "Cập nhật tính năng mới - Tăng tốc độ xử lý đơn hàng",
        description:
            "Chúng tôi vừa triển khai hệ thống xử lý đơn hàng mới giúp tăng tốc độ lên đến 3 lần so với trước. Giờ đây các đơn hàng của bạn sẽ được xử lý nhanh chóng và hiệu quả hơn...",
        category: "Cập nhật",
        createdAt: "2 giờ trước",
        likes: 124,
        comments: 18,
        isLiked: false,
        badge: "new",
    },
    {
        id: "2",
        author: {
            name: "Support Team",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Support",
            role: "Support",
        },
        title: "Hướng dẫn tối ưu chiến dịch Facebook Marketing 2025",
        description:
            "Xu hướng marketing trên Facebook đang thay đổi nhanh chóng. Bài viết này sẽ giúp bạn nắm bắt những chiến lược mới nhất để tăng tương tác và chuyển đổi cho doanh nghiệp...",
        category: "Hướng dẫn",
        createdAt: "1 ngày trước",
        likes: 89,
        comments: 25,
        isLiked: true,
        badge: "trending",
    },
    {
        id: "3",
        author: {
            name: "Marketing Team",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marketing",
            role: "Marketing",
        },
        title: "Thông báo bảo trì hệ thống định kỳ",
        description:
            "Để nâng cao chất lượng dịch vụ, chúng tôi sẽ thực hiện bảo trì hệ thống vào 2h-4h sáng ngày 20/01/2026. Mọi dịch vụ sẽ tạm dừng trong thời gian này...",
        category: "Thông báo",
        createdAt: "3 ngày trước",
        likes: 45,
        comments: 8,
        isLiked: false,
    },
];

export default function HomeNewsFeed() {
    const [posts, setPosts] = useState<BlogPost[]>(MOCK_BLOG_POSTS);

    const handleLike = (postId: string) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? {
                        ...post,
                        isLiked: !post.isLiked,
                        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                    }
                    : post
            )
        );
    };

    const getBadgeStyle = (badge?: "trending" | "new") => {
        if (badge === "trending") {
            return "bg-gray-900 text-white";
        }
        if (badge === "new") {
            return "bg-gray-200 text-gray-900";
        }
        return "";
    };

    return (
        <div className="bg-white rounded shadow-sm border border-slate-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            Tin tức & Cập nhật
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            Các thông tin mới nhất từ hệ thống
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="divide-y divide-gray-200">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-6 hover:bg-gray-50/50 transition-all duration-200 group"
                    >
                        {/* Author Info */}
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-10 h-10 rounded-full border-2 border-gray-200"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-gray-900">
                                        {post.author.name}
                                    </span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500">
                                        {post.author.role}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-xs text-gray-500">
                                        {post.createdAt}
                                    </span>
                                    {post.badge && (
                                        <>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span
                                                className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${getBadgeStyle(
                                                    post.badge
                                                )}`}
                                            >
                                                {post.badge === "trending" && (
                                                    <TrendingUp className="w-3 h-3" />
                                                )}
                                                {post.badge === "trending" ? "Trending" : "Mới"}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <span className="text-xs font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                                {post.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="mb-4">
                            <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors cursor-pointer">
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                {post.description}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => handleLike(post.id)}
                                className={`flex items-center gap-2 text-sm font-medium transition-all cursor-pointer ${post.isLiked
                                    ? "text-gray-900"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                <Heart
                                    className={`w-4 h-4 transition-all ${post.isLiked ? "fill-gray-900" : ""
                                        }`}
                                />
                                <span>{post.likes}</span>
                            </button>

                            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
                                <MessageCircle className="w-4 h-4" />
                                <span>{post.comments}</span>
                            </button>

                            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors ml-auto cursor-pointer">
                                <Share2 className="w-4 h-4" />
                                <span className="text-xs">Chia sẻ</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 text-center">
                <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                    Tải thêm bài viết
                </button>
            </div>
        </div>
    );
}