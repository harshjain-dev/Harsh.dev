import React, { useState, useEffect } from 'react';
import { MediumService } from '../../services/medium';

interface ProcessedArticle {
    title: string;
    description: string;
    publishedDate: string;
    readingTime: string;
    tags: string[];
    mediumUrl: string;
    category: string;
    featured: boolean;
    thumbnail?: string;
}

const Blog = () => {
    const [articles, setArticles] = useState<ProcessedArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const MEDIUM_USERNAME = "harsh.chetan20";

    const extractSnippet = (content: string, articleCount: number = 3): string => {
        if (!content) return 'Click to read more...';
        const textContent = content.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '').trim();
        const maxLength = articleCount === 1 ? 250 : articleCount === 2 ? 220 : 200;
        return textContent.length > maxLength ? textContent.substring(0, maxLength) + '...' : textContent;
    };

    useEffect(() => {
        const fetchMediumArticles = async () => {
            try {
                setLoading(true);
                setError(null);
                const mediumArticles = await MediumService.fetchArticles(MEDIUM_USERNAME);

                const processedArticles: ProcessedArticle[] = mediumArticles.map((article, index) => {
                    const categories = MediumService.extractCategories(
                        article.description || article.content || '',
                        article.title,
                        article.categories || []
                    );

                    return {
                        title: article.title,
                        description: article.contentSnippet || extractSnippet(article.description || '', mediumArticles.length),
                        publishedDate: article.pubDate,
                        readingTime: MediumService.calculateReadingTime(article.description || article.content || ''),
                        tags: categories.slice(0, 3),
                        mediumUrl: article.link,
                        category: categories[0] || 'Technology',
                        featured: index < 2,
                        thumbnail: article.thumbnail
                    };
                });

                setArticles(processedArticles);
            } catch (err) {
                console.error('Failed to fetch Medium articles:', err);
                setError(`Failed to load articles.`);
            } finally {
                setLoading(false);
            }
        };

        fetchMediumArticles();
    }, []);

    if (loading) {
        return (
            <section id="blog" className="py-24 bg-surface-1">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-body">Loading articles from Medium...</p>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section id="blog" className="py-24 bg-surface-1">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold mb-4 text-heading">Tech Blog</h2>
                    <p className="text-red-500 mb-4">{error}</p>
                    <a href={`https://medium.com/@${MEDIUM_USERNAME}`} target="_blank" rel="noreferrer" className="text-heading font-bold underline">Visit Medium Profile</a>
                </div>
            </section>
        )
    }

    return (
        <section id="blog" className="py-24 bg-surface-1 border-t border-surface-2">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-heading">Tech Blog</h2>
                    <p className="text-body max-w-2xl mx-auto">
                        Sharing insights on Android development, architecture patterns, and mobile engineering best practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.slice(0, 6).map((post, index) => (
                        <div key={index} className="group flex flex-col bg-surface-2 rounded-3xl overflow-hidden border border-surface-2 transition-all hover:-translate-y-2 hover:shadow-lg">
                            {post.thumbnail && (
                                <div className="h-48 overflow-hidden relative">
                                    <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-surface-1/90 backdrop-blur text-heading text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                                    </div>
                                </div>
                            )}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-body mb-3">
                                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-heading leading-tight group-hover:text-btn-accent transition-colors">
                                    <a href={post.mediumUrl} target="_blank" rel="noreferrer">{post.title}</a>
                                </h3>
                                <p className="text-body text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="mt-auto pt-6 border-t border-surface-1 flex items-center justify-between">
                                    <a href={post.mediumUrl} target="_blank" rel="noreferrer" className="text-heading font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href={`https://medium.com/@${MEDIUM_USERNAME}`} target="_blank" rel="noreferrer" className="inline-block bg-btn-dark text-surface-1 px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl">
                        View All Articles on Medium
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
