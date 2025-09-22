import axios from "axios";
import { API_BASE_URL } from "../config/api";
// import '../assets/admin/css/app.min.css';
import { useEffect, useMemo, useState } from "react";
import "../assets/css/Admin.css";
// import '../assets/admin/vendors/datatables/dataTables.bootstrap.min.css'
import { DeleteOutlined, EditOutlined, CopyOutlined } from "@ant-design/icons";
import { GUEST_TYPE } from "../common/CodeConst";

interface Guest {
  id: string;
  guestName: string;
  guestPath: string;
  status: boolean | null;
  vow: boolean;
  type: number;
  partner: number;
  donate: number;
}

const Admin: React.FC = () => {
  const api = axios.create({
    baseURL: API_BASE_URL,
  });
  useEffect(() => {
    api
      .get(`/api/Guest/list`)
      .then((res) => {
        setGuests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [guests, setGuests] = useState<Guest[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "true" | "false">(
    "all"
  );
  const [filterSide, setFilterSide] = useState<"all" | "trai" | "gai">("all");

  const [filterVow, setFilterVow] = useState<"all" | "true" | "false">("all");

  const [filterType, setFilterType] = useState<number>(0);

  // Popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null);
  const [tempGuest, setTempGuest] = useState<Omit<Guest, "guestId">>({
    id: "",
    guestName: "",
    guestPath: "",
    status: null,
    vow: false,
    type: 0,
    partner: 0,
    donate: 0,
  });

  // Hàm tính bên trai/gái từ type
  const getSide = (type: number) =>
    type === 1 || type === 2 || type === 5 ? "trai" : "gai";

  const filteredGuests = useMemo(() => {
    return guests.filter((g) => {
      const matchStatus =
        filterStatus === "all" ||
        (filterStatus === "true" && g.status) ||
        (filterStatus === "false" && !g.status);
      const matchName = g.guestName
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchVow =
        filterVow === "all" ||
        (filterVow === "true" && g.vow) ||
        (filterVow === "false" && !g.vow);
      const matchType = filterType === 0 ? true : g.type === filterType;
      const matchSide =
        filterSide === "all" ? true : getSide(g.type) === filterSide;
      return matchName && matchStatus && matchVow && matchType && matchSide;
    });
  }, [guests, search, filterStatus, filterVow, filterType, filterSide]);

  const openModal = (guest?: Guest) => {
    if (guest) {
      setEditingGuest(guest);
      setTempGuest({ ...guest });
    } else {
      setEditingGuest(null);
      setTempGuest({
        id: "",
        guestName: "",
        guestPath: "",
        status: null,
        vow: false,
        type: 0,
        partner: 0,
        donate: 0,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    console.log(tempGuest, 'asd');
    if (!tempGuest.guestName.trim()) return;

    if (editingGuest) {
      setGuests((prev) =>
        prev.map((g) =>
          g.id === editingGuest.id ? { ...editingGuest, ...tempGuest } : g
        )
      );
    } else {
      const newGuest: Guest = {
        ...tempGuest,
      };
      setGuests((prev) => [...prev, newGuest]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa khách mời này?")) {
      setGuests((prev) => prev.filter((g) => g.id !== id));
    }
  };

  const handleCopy = (guestPath: string) => {
    const domain = `duydiep.love/${guestPath}`;
    navigator.clipboard
      .writeText(domain)
      .then(() => alert(`Đã copy: ${domain}`))
      .catch((err) => console.error("Copy thất bại", err));
  };

  return (
    <div className="flex justify-center">
      <div className="card">
        <div className="card-body">
          <div className="m-b-30">
            <div className="w-full">
              <div className="m-b-10 d-md-flex flex items-center">
                <div className="col-3">
                  <span>Tham dự:</span>
                </div>
                <div className="col-9">
                  <select
                    className="custom-select"
                    value={filterStatus}
                    onChange={(e) =>
                      setFilterStatus(
                        e.target.value as "all" | "true" | "false"
                      )
                    }
                  >
                    <option value="all">Tất cả</option>
                    <option value="true">Sẽ đến</option>
                    <option value="false">Không đến</option>
                  </select>
                </div>
              </div>
              <div className="m-b-10 d-md-flex flex items-center">
                <div className="col-3">
                  <span>Khách Vow:</span>
                </div>
                <div className="col-9">
                  <select
                    className="custom-select"
                    value={filterVow}
                    onChange={(e) =>
                      setFilterVow(e.target.value as "all" | "true" | "false")
                    }
                  >
                    <option value="all">Tất cả</option>
                    <option value="true">Có</option>
                    <option value="false">Không</option>
                  </select>
                </div>
              </div>
              <div className="m-b-10 d-md-flex flex items-center">
                <div className="col-3">
                  <span>Loại khách:</span>
                </div>
                <div className="col-9">
                  <select
                    className="custom-select"
                    value={filterType}
                    onChange={(e) => setFilterType(Number(e.target.value))}
                  >
                    <option value="">Tất cả</option>
                    <option value="1">Bạn bố Phương</option>
                    <option value="2">Bạn mẹ Giang</option>
                    <option value="3">Bạn bố Long</option>
                    <option value="4">Bạn mẹ Vân</option>
                    <option value="5">Bạn Duy</option>
                    <option value="6">Bạn Diệp</option>
                    <option value="7">Bạn Thảo</option>
                  </select>
                </div>
              </div>
              <div className="m-b-10 d-md-flex flex items-center">
                <div className="col-3">
                  <span>Nhà trai/gái:</span>
                </div>
                <div className="col-9">
                  <select
                    className="custom-select"
                    value={filterSide}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e) => setFilterSide(e.target.value as any)}
                  >
                    <option value="all">Tất cả</option>
                    <option value="trai">Nhà trai</option>
                    <option value="gai">Nhà gái</option>
                  </select>
                </div>
              </div>
              <div className="m-b-10 gap-1 flex">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Tìm theo tên..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="admin-search-input w-full"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal()}
                  >
                    <span>Thêm</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-right"></div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover e-commerce-table">
              <thead>
                <tr>
                  <th className="sticky-col">Tên</th>
                  <th>Link</th>
                  <th>Copy</th>
                  <th>Tham dự</th>
                  <th>Khách đi cùng</th>
                  <th>Vow</th>
                  <th>Loại khách</th>
                  <th>Nhà</th>
                  <th>Tiền mừng</th>
                  <th>Sửa/Xóa</th>
                </tr>
              </thead>
              <tbody>
                {filteredGuests.map((g) => (
                  <tr key={g.id}>
                    <td className="sticky-col">
                      <div className="d-flex align-items-center">
                        <h6 className="m-b-0">{g.guestName}</h6>
                      </div>
                    </td>
                    <td>{g.guestPath}</td>
                    <td>
                      <button
                        className="btn btn-icon btn-hover btn-sm btn-rounded pull-right"
                        onClick={() => handleCopy(g.guestPath)}
                      >
                        <CopyOutlined />
                      </button>
                    </td>
                    <td>
                      {g.status === null ? (
                        <div className="d-flex align-items-center">
                          <div className="badge badge-warning badge-dot m-r-10"></div>
                          <div>Chưa phản hồi</div>
                        </div>
                      ) : g.status ? ((
                        <div className="d-flex align-items-center">
                          <div className="badge badge-success badge-dot m-r-10"></div>
                          <div>Sẽ đến</div>
                        </div>
                      )) : ((
                        <div className="d-flex align-items-center">
                          <div className="badge badge-danger badge-dot m-r-10"></div>
                          <div>Không đến</div>
                        </div>
                      ))}
                    </td>
                    <td>{g.partner}</td>
                    <td>
                      {g.vow ? (
                        <div className="d-flex align-items-center">
                          <div className="badge badge-success badge-dot m-r-10"></div>
                          <div>Có</div>
                        </div>
                      ) : (
                        <div className="d-flex align-items-center">
                          <div className="badge badge-danger badge-dot m-r-10"></div>
                          <div>Không</div>
                        </div>
                      )}
                    </td>
                    <td>
                      {GUEST_TYPE[g.type as keyof typeof GUEST_TYPE] ??
                        "Không rõ"}
                    </td>
                    <td>
                      {getSide(g.type) === "trai" ? "Nhà Trai" : "Nhà Gái"}
                    </td>
                    <td>{g.donate}</td>
                    <td className="text-right">
                      <button
                        className="btn btn-icon btn-hover btn-sm btn-rounded pull-right"
                        onClick={() => {
                          openModal(g);
                        }}
                      >
                        <EditOutlined />
                      </button>
                      <button
                        className="btn btn-icon btn-hover btn-sm btn-rounded"
                        onClick={() => handleDelete(g.id)}
                      >
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>{editingGuest ? "Sửa khách mời" : "Thêm khách mời"}</h2>

                {[
                  "Tên khách:",
                  "Link:",
                  "Khách đi cùng:",
                  "Tiền mừng:",
                ].map((field) => (
                  <div className="modal-field" key={field}>
                    <label>{field.toUpperCase()}</label>
                    <input
                      type="text"
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      value={(tempGuest as any)[field]}
                      onChange={(e) =>
                        setTempGuest({ ...tempGuest, [field]: e.target.value })
                      }
                    />
                  </div>
                ))}

                <div className="modal-field">
                  <label>Loại khách:</label>
                  <select
                    // nếu type === null thì hiển thị option "Chưa chọn"
                    value={
                      tempGuest.type === null ? "" : String(tempGuest.type)
                    }
                    onChange={(e) =>
                      setTempGuest({
                        ...tempGuest,
                        type:
                          e.target.value === "" ? 0 : Number(e.target.value),
                      })
                    }
                  >
                    <option value="">Chưa chọn</option>
                    <option value="1">Bạn bố Phương</option>
                    <option value="2">Bạn mẹ Giang</option>
                    <option value="3">Bạn bố Long</option>
                    <option value="4">Bạn mẹ Vân</option>
                    <option value="5">Bạn Duy</option>
                    <option value="6">Bạn Diệp</option>
                    <option value="7">Bạn Thảo</option>
                  </select>
                </div>

                <div className="modal-field">
                  <label>Lễ Vow:</label>
                  <select
                    value={tempGuest.vow ? "true" : "false"}
                    onChange={(e) =>
                      setTempGuest({
                        ...tempGuest,
                        vow: e.target.value === "true",
                      })
                    }
                  >
                    <option value="true">Có</option>
                    <option value="false">Không</option>
                  </select>
                </div>

                <div className="modal-field">
                  <label>Trạng thái:</label>
                  <select
                    // nếu status === null thì giá trị control = "" => option “Chưa chọn” được hiển thị
                    value={
                      tempGuest.status === null
                        ? ""
                        : tempGuest.status
                        ? "true"
                        : "false"
                    }
                    onChange={(e) =>
                      setTempGuest({
                        ...tempGuest,
                        status:
                          e.target.value === "" // người dùng chọn “Chưa chọn”
                            ? null
                            : e.target.value === "true",
                      })
                    }
                  >
                    <option value="">Chưa phản hồi</option>
                    <option value="true">Sẽ đến</option>
                    <option value="false">Không đến</option>
                  </select>
                </div>

                <div className="modal-actions">
                  <button onClick={handleSave} className="modal-save">
                    Lưu
                  </button>
                  <button onClick={closeModal} className="modal-cancel">
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
