import type { ReactElement } from "react";

import type { Device } from "../../types/Device";
import { List, ListItem } from "../List";

type DeviceListProps = {
  data: readonly Device[];
};

const DeviceList = ({ data }: DeviceListProps): ReactElement => {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.name} icon={item.icon}>
          {item.name}
        </ListItem>
      ))}
    </List>
  );
};

export { DeviceList };
export type { DeviceListProps };
