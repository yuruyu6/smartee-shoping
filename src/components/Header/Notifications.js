import { useDispatch, useSelector } from 'react-redux';
import { closeNotification } from '../../redux/actions/notifications';
import Alert from './Alert';

export default function Notification() {
  const notifications = useSelector(
    ({ notifications }) => notifications.notifications
  );
  const dispatch = useDispatch();

  const onClickCloseButton = (key) => dispatch(closeNotification(key));

  return (
    notifications &&
    notifications.map((notification) => (
      <Alert
        key={notification.key}
        notification={notification}
        onClickCloseButton={onClickCloseButton}
      />
    ))
  );
}
