import type { ReactElement } from "react";

import type { Device } from "../../types/Device";
import styles from "./DeviceList.module.scss";
import { DeviceListItem } from "./DeviceListItem";

type DeviceListProps = {
  data: readonly Device[];
};

const DeviceList = ({ data }: DeviceListProps): ReactElement => {
  return (
    <div className={styles.list}>
      {data.map((data) => (
        <DeviceListItem key={data.name} data={data} />
      ))}
    </div>
  );
};

export { DeviceList };
export type { DeviceListProps };
