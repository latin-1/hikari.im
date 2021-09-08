import type { ReactElement } from "react";

import type { Device } from "../../types/Device";
import styles from "./DeviceListItem.module.scss";

type DeviceListItemProps = {
  data: Device;
};

const DeviceListItem = ({ data }: DeviceListItemProps): ReactElement => {
  return (
    <div className={styles.item}>
      <img className={styles.icon} src={data.icon} alt={`${data.name} Icon`} />
      <div className={styles.name}>{data.name}</div>
    </div>
  );
};

export { DeviceListItem };
export type { DeviceListItemProps };
