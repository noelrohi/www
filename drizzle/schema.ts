import { InferModel, sql } from "drizzle-orm";
import { mysqlTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";


export const messages = mysqlTable("messages", {
	id: serial("id").primaryKey().notNull(),
	userId: varchar("userId", { length: 256 }).notNull(),
    message: text("message").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).default(sql`(now())`),
}, (messages) => {
    return {
    userIdIndex: uniqueIndex('userId_idx').on(messages.userId),
  }
});

export type Message = InferModel<typeof messages>