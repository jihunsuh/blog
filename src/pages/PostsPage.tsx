import { Section } from '@entropyparadox/reusable-react';
import React, { FC, useState } from 'react';
import {
  Route,
  RouteComponentProps,
  Switch,
  useHistory,
} from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from '../assets/svg/right-arrow.svg';
import moment from 'moment';
import { PostDetailPage } from './PostDetailPage';

interface MatchParams {
  date: string;
}

export const PostsPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  let { date } = match.params;

  const history = useHistory();

  const [weeksAgo, setWeeksAgo] = useState(0);

  let today = moment().subtract(weeksAgo, 'weeks');
  let startDay = today.clone().startOf('isoWeek').subtract(1, 'days');
  let endDay = today.clone().endOf('isoWeek').subtract(1, 'days');

  let WeekString =
    startDay.format('YYYY.MM.DD') + ' - ' + endDay.format('YYYY.MM.DD');

  if (!date) {
    date = today.format('YYYY-MM-DD');
  }

  return (
    <div className="w-full max-w-128 mx-auto">
      <Section>
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer w-6 h-6 flex items-center justify-center"
            onClick={() => setWeeksAgo(weeksAgo + 1)}
          >
            <LeftArrow />
          </div>
          <div className="text-gray-1 font-gsans-medium">{WeekString}</div>
          <div
            className="cursor-pointer w-6 h-6 flex items-center justify-center"
            onClick={() => setWeeksAgo(weeksAgo - 1)}
          >
            <RightArrow />
          </div>
        </div>

        <div className="flex justify-around space-x-2 mt-5">
          {[
            [0, '일'],
            [1, '월'],
            [2, '화'],
            [3, '수'],
            [4, '목'],
            [5, '금'],
            [6, '토'],
          ].map(([num, day]) => {
            let currentDate = moment(startDay)
              .add(num, 'days')
              .format('YYYY-MM-DD');
            return (
              <div
                key={day}
                className={
                  currentDate !== moment().format('YYYY-MM-DD')
                    ? currentDate === date
                      ? 'bg-brand-2 text-white rounded-xl text-center w-full px-0.5 py-2 cursor-pointer border border-brand-2'
                      : 'bg-brand-1 text-white rounded-xl text-center w-full px-0.5 py-2 cursor-pointer border border-brand-1'
                    : currentDate === date
                    ? 'text-white bg-brand-2 rounded-xl text-center w-full px-0.5 py-2 cursor-pointer border border-brand-2'
                    : 'text-brand-1 rounded-xl text-center w-full px-0.5 py-2 cursor-pointer border border-brand-1'
                }
                onClick={(e) => {
                  history.replace(`/blog/posts/${currentDate}`);
                }}
              >
                <div>
                  {currentDate === moment().format('YYYY-MM-DD') ? '오늘' : day}
                </div>
                <div>{moment(startDay).add(num, 'days').date()}</div>
                {/* {Object.keys(posts).includes(currentDate) ? (
                  <div className="w-2 h-2 rounded bg-orange-4 mx-auto" />
                ) : (
                  <></>
                )} */}
              </div>
            );
          })}
        </div>
      </Section>

      <Switch>
        <Route
          path="/blog/posts/:date"
          component={() => <PostDetailPage date={date} />}
        />
      </Switch>
    </div>
  );
};
