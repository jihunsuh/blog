import React, { FC } from 'react';
import Markdown from 'react-markdown';
import { posts } from '../posts/posts';
import { Link } from 'react-router-dom';

interface PostDetailPageProps {
  date: string;
}

function RouterLink(props: any) {
  return props.href.match(/^(https?:)?\/\//) ? (
    <a href={props.href}>{props.children}</a>
  ) : (
    <Link to={props.href}>{props.children}</Link>
  );
}

export const PostDetailPage: FC<PostDetailPageProps> = ({ date }) => {
  const contents: any = posts;
  if (!contents.dates.includes(date)) {
    return <div className="w-full">해당 날짜에 쓰여진 기록이 없습니다!</div>;
  }
  const content = contents[date];
  return <div className="w-full whitespace-pre-line">{content}</div>;
};
