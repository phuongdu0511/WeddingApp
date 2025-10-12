using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeddingAppAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddLogViewTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LogView",
                columns: table => new
                {
                    ViewId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GuestName = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    GuestPath = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    Type = table.Column<int>(type: "int", nullable: true),
                    JustViewed = table.Column<int>(type: "int", nullable: false, defaultValueSql: "1"),
                    FullyViewed = table.Column<int>(type: "int", nullable: false, defaultValueSql: "0"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LogView", x => x.ViewId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LogView");
        }
    }
}
